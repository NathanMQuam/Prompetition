<template>
  <div class="row w-100 d-flex">
    <div class="col-sm-6">
      <div class="row">
        <div class="col-12">
          <h3 class="mb-4" v-if="route.name === 'Daily-Challenge'">
            {{ state.todaysTopic.body }}
          </h3>
          <h3 v-else-if="state.topics[0]">
            {{ state.topics.filter(t => t.id === route.params.topicId )[0].body || 'placeholder' }}
          </h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div v-if="state.timeLeft && route.name === 'Daily-Challenge'">
            {{ 'Time Remaining: ' + new Date(state.timeLeft).toLocaleTimeString() }}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <form @submit.prevent="submitResponse">
            <div class="row d-flex justify-content-evenly pr-3">
              <div class="col-sm pr-0">
                <textarea name="topicResponse" v-model="state.submission" class="rounded" placeholder="Write Response Here...">yo yo yo</textarea>
              </div>
              <div class="col-sm-1 px-0">
                <button type="submit" class="btn btn-primary h-100 w-100">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { useRoute, useRouter } from 'vue-router'
import { topicService } from '../services/TopicService'
import { responseService } from '../services/ResponseService.js'
export default {
  name: 'Write',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      todaysTopic: computed(() => AppState.todaysTopic),
      activeTopic: computed(() => AppState.activeTopic),
      submission: '',
      isDailyChallenge: false,
      startDate: computed(() => AppState.todaysTopic.challengeStartDate),
      submissionEndDate: computed(() => AppState.todaysTopic.challengeStartDate + 86400000),
      timeLeft: 0,
      topics: computed(() => AppState.topics)
    })
    const timer = setInterval(getTimeLeft, 1000)
    onMounted(async() => {
      if (route.name === 'Daily-Challenge') {
        await topicService.getTodaysTopic()
        await responseService.getDailyChallengeResponse()
        state.isDailyChallenge = true
      } else {
        await topicService.getTopicById(route.params.topicId)
        await responseService.getResponsesByTopicId(route.params.topicId)
        state.isDailyChallenge = false
      }
      // console.log(AppState.topics)
      if (!AppState.topics[0]) {
        await topicService.getTopics()
      }
      // console.log('My Response:', AppState.myResponse)
      state.submission = AppState.myResponse ? AppState.myResponse.body : ''
      // logger.log('startDate', state.startDate.getTime())
      // logger.log(new Date(AppState.todaysTopic.challengeStartDate).getTime())
      // logger.log(new Date().getTime())
    })
    function getTimeLeft() {
      // TODO: Display time remaining as only hours minutes seconds, and not a time (AM, PM, etc)
      state.timeLeft = computed(() => (AppState.todaysTopic.challengeStartDate + 86400000 - new Date()))
      // NOTE: There are 86,400,000 milliseconds in one day

      if (state.timeLeft < 0) {
        window.alert('Submission period has ended')
        clearInterval(timer)
      } else if (state.timeLeft < 60000) {
        window.alert("Time's almost up!")
      }
    }
    return {
      state,
      route,
      submitResponse() {
        const body = {
          body: state.submission,
          topicId: route.params.topicId,
          votes: 0
        }

        if (state.isDailyChallenge) {
          body.topicId = state.todaysTopic.id
        }

        if (!AppState.myResponse) {
          responseService.createResponse(body)
        } else {
          responseService.editResponse(body)
        }

        if (state.isDailyChallenge) {
          router.push({ name: 'Home' })
          window.alert('Please wait for the response period to end to begin voting')
        } else {
          router.push({ name: 'Responses', topicId: route.params.topicId })
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  textarea {
    display: block;
    overflow: hidden;
    resize: vertical;
    min-height: 40px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.671);
    color: black;
    padding: 2vh;
  }
  .col-sm-6 {
    border: 2px solid gray;
    padding: 2vh;
    color: var(--light);
    height: min-content;
    margin: 2vh;
  }
  @media (max-width: 600px) {
    .col-sm-1 {
      margin-left: 2vh;
    }
  }
</style>
