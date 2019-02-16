import { makeAction } from '../util'

const SET_LABELS = 'SET_LABELS'
const SET_ACTIVE_LABEL = 'SET_ACTIVE_LABEL'

const state = {
  labels: [],
  activeLabel: null
}

const mutations = {
  [SET_LABELS] (state, labels) {
    state.labels = [
  {
    "id": 814564812,
    "node_id": "MDU6TGFiZWw4MTQ1NjQ4MTI=",
    "url": "https://api.github.com/repos/Moonlightg/mb/labels/Axios",
    "name": "Axios",
    "color": "0052cc",
    "default": false
  },
  {
    "id": 701778964,
    "node_id": "MDU6TGFiZWw3MDE3Nzg5NjQ=",
    "url": "https://api.github.com/repos/Moonlightg/mb/labels/CSS",
    "name": "CSS",
    "color": "fbca04",
    "default": false
  },
  {
    "id": 814822947,
    "node_id": "MDU6TGFiZWw4MTQ4MjI5NDc=",
    "url": "https://api.github.com/repos/Moonlightg/mb/labels/ES6",
    "name": "ES6",
    "color": "666666",
    "default": false
  },
  {
    "id": 690005093,
    "node_id": "MDU6TGFiZWw2OTAwMDUwOTM=",
    "url": "https://api.github.com/repos/Moonlightg/mb/labels/GIT",
    "name": "GIT",
    "color": "e99695",
    "default": false
  },
  {
    "id": 716266987,
    "node_id": "MDU6TGFiZWw3MTYyNjY5ODc=",
    "url": "https://api.github.com/repos/Moonlightg/mb/labels/HTML5",
    "name": "HTML5",
    "color": "b60205",
    "default": false
  },
  {
    "id": 742069314,
    "node_id": "MDU6TGFiZWw3NDIwNjkzMTQ=",
    "url": "https://api.github.com/repos/Moonlightg/mb/labels/JQUERY",
    "name": "JQUERY",
    "color": "5319e7",
    "default": false
  },
  {
    "id": 729099294,
    "node_id": "MDU6TGFiZWw3MjkwOTkyOTQ=",
    "url": "https://api.github.com/repos/Moonlightg/mb/labels/JS",
    "name": "JS",
    "color": "c2e0c6",
    "default": false
  },
  {
    "id": 691093675,
    "node_id": "MDU6TGFiZWw2OTEwOTM2NzU=",
    "url": "https://api.github.com/repos/Moonlightg/mb/labels/NODE",
    "name": "NODE",
    "color": "0e8a16",
    "default": false
  },
  {
    "id": 697497404,
    "node_id": "MDU6TGFiZWw2OTc0OTc0MDQ=",
    "url": "https://api.github.com/repos/Moonlightg/mb/labels/SASS",
    "name": "SASS",
    "color": "d93f0b",
    "default": false
  },
  {
    "id": 724227478,
    "node_id": "MDU6TGFiZWw3MjQyMjc0Nzg=",
    "url": "https://api.github.com/repos/Moonlightg/mb/labels/VUE",
    "name": "VUE",
    "color": "0e8a16",
    "default": false
  },
  {
    "id": 798862868,
    "node_id": "MDU6TGFiZWw3OTg4NjI4Njg=",
    "url": "https://api.github.com/repos/Moonlightg/mb/labels/webpack",
    "name": "webpack",
    "color": "c2e0c6",
    "default": false
  },
  {
    "id": 695673007,
    "node_id": "MDU6TGFiZWw2OTU2NzMwMDc=",
    "url": "https://api.github.com/repos/Moonlightg/mb/labels/%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5",
    "name": "旅游攻略",
    "color": "bfd4f2",
    "default": false
  },
  {
    "id": 855497489,
    "node_id": "MDU6TGFiZWw4NTU0OTc0ODk=",
    "url": "https://api.github.com/repos/Moonlightg/mb/labels/%E9%9A%8F%E7%AC%94",
    "name": "随笔",
    "color": "24cc18",
    "default": false
  }
]

  },
  [SET_ACTIVE_LABEL] (state, label) {
    if ((state.activeLabel && label && label.name === state.activeLabel.name) || (!state.activeLabel && !label)) {
      return
    }

    state.activeLabel = label
  }
}

const actions = {
  setLabels: makeAction(SET_LABELS),
  updateActiveLabel: makeAction(SET_ACTIVE_LABEL)
}

const getters = {
  labels (state) {
    return state.labels
  },
  activeLabel (state) {
    return state.activeLabel
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
