interface ResultMach {
  teamA: {
    token: string
    goal: number
  }
  teamB: {
    token: string
    goal: number
  }
}
const groups = new Map<string, Map<string, any>>()

const currentlyGroup = new Map()

const g = {
  a: {
    'asudhau-hsdahd': {
      goal: 0,
      points: 0,
      name: 'Brasil'
    }
  }
}

currentlyGroup.set('tokenA', {
  name: 'Brasil',
  amountOfGoal: 0,
  points: 0
})

currentlyGroup.set('tokenB', {
  name: 'Inglaterra',
  amountOfGoal: 0,
  points: 0
})

currentlyGroup.set('tokenC', {
  name: 'Alemanha',
  amountOfGoal: 0,
  points: 0
})

currentlyGroup.set('tokenD', {
  name: 'China',
  amountOfGoal: 0,
  points: 0
})

groups.set('A', currentlyGroup)

function matchPlay (tokenA: string, tokenB: string): ResultMach {
  const teamA = 5
  const teamB = 4

  return {
    teamA: {
      token: tokenA,
      goal: teamA
    },
    teamB: {
      token: tokenB,
      goal: teamB
    }
  }
}
const entries = Object.fromEntries(currentlyGroup)
const keys = Object.keys(entries)

const { teamA, teamB } = matchPlay(keys[0], keys[1])

function randomMatch () {

}

const result = resultMatch(teamA, teamB)

const team = currentlyGroup.get(result?.token)

team.goal = result?.goal
team.points = result?.points

function resultMatch (teamA: any, teamB: any): any {
  if (teamA.goal > teamB.goal) {
    return {
      token: teamA.token,
      points: 3,
      goal: teamA.goal
    }
  }
}

currentlyGroup.set(result?.token, team)
console.log(currentlyGroup)
