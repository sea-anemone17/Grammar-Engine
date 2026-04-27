export const patterns = [
  {
    "id": "P01",
    "name": "both 위치 / 둘 다 강조",
    "category": "어법 패턴",
    "summary": "both = 둘을 함께 강조할 때 위치가 시험 포인트",
    "tree": "```python\nif 강조대상 == 둘:\n    if 조동사/BE가 있음:\n        check(\"조동사/BE 뒤, 본동사 앞 both\")\n    else:\n        check(\"일반동사 앞 both\")\n```",
    "rule": "→ 조동사·be동사 뒤 / 일반동사 앞이 기본 위치입니다.\n→ both of + 복수명사/대명사 구조와 부사 both를 구분합니다.",
    "traps": [
      "both must be가 항상 틀린 것은 아니지만, 001에서는 must both be가 더 자연스러운 초점입니다.",
      "both of 뒤에는 복수명사/복수대명사 목적격이 옵니다."
    ],
    "questions": [
      "둘을 강조하는가 → 조동사/BE 유무 확인 → both 위치 확인"
    ],
    "examples": [
      1
    ],
    "keywords": [
      "both"
    ]
  },
  {
    "id": "P02",
    "name": "so/such ~ that 결과절",
    "category": "어법 패턴",
    "summary": "정도가 커서 결과가 생기는 구조",
    "tree": "```python\nif so/such 발견:\n    if 뒤가 형용사/부사:\n        use(\"so + 형/부 + that\")\n    elif 뒤가 명사구:\n        use(\"such + 명사구 + that\")\n    check(\"that절이 결과인가\")\n```",
    "rule": "→ so + 형용사/부사 + that S V\n→ such + (a/an) + 형용사 + 명사 + that S V\n→ so that은 목적/결과가 모두 가능하므로 문맥 확인이 필요합니다.",
    "traps": [
      "so 뒤에 명사구를 바로 두는 오류",
      "such 뒤에 형용사만 두는 오류",
      "that절을 관계사절로 착각하는 오류"
    ],
    "questions": [
      "정도 표현인가 → 뒤가 형/부면 so, 명사구면 such → that절 결과 확인"
    ],
    "examples": [
      5,
      48,
      99,
      123
    ],
    "keywords": [
      "so",
      "such",
      "that"
    ]
  },
  {
    "id": "P03",
    "name": "for + 목적격 + to V / 의미상 주어",
    "category": "어법 패턴",
    "summary": "to V의 주체가 문장 주어와 다르면 for + 목적격",
    "tree": "```python\nif to V의 행동 주체가 필요함:\n    if 행동 주체 != 문장 주어:\n        use(\"for + 목적격 + to V\")\n```",
    "rule": "→ for 뒤에는 목적격이 옵니다: for them / for students / for people.\n→ to부정사의 의미상 주어는 to V 앞에 둡니다.",
    "traps": [
      "for they to V ❌",
      "for + 목적격 없이 쓰면 행동 주체가 흐려질 수 있습니다.",
      "for 뒤 명사가 앞 명사를 수식하는 전치사구인지, to V의 의미상 주어인지 구분해야 합니다."
    ],
    "questions": [
      "to V의 실제 행동 주체가 누구인가?"
    ],
    "examples": [
      1,
      32,
      34,
      35,
      47
    ],
    "keywords": [
      "for",
      "to"
    ]
  },
  {
    "id": "P04",
    "name": "to부정사 주어",
    "category": "어법 패턴",
    "summary": "To V가 문장 맨 앞에서 주어 역할",
    "tree": "```python\nif 문장이 To V로 시작:\n    mark(\"To V구 전체 = 주어\")\n    find(\"진짜 동사\")\n    check(\"단수 취급\")\n```",
    "rule": "→ To V 주어는 원칙적으로 단수 취급합니다.\n→ 긴 to부정사 주어는 “~하는 것”으로 잡습니다.",
    "traps": [
      "To V 안의 동사를 문장의 본동사로 착각",
      "긴 주어 뒤 본동사 수 일치 놓침"
    ],
    "questions": [
      "문장 첫 To V 덩어리가 어디까지 주어인가?"
    ],
    "examples": [
      7,
      8,
      25
    ],
    "keywords": [
      "to"
    ]
  },
  {
    "id": "P05",
    "name": "동명사 주어",
    "category": "어법 패턴",
    "summary": "V-ing가 주어이면 “~하는 것”이고 보통 단수 취급",
    "tree": "```python\nif 문장이 V-ing로 시작:\n    mark(\"V-ing구 전체 = 주어\")\n    find(\"본동사\")\n    check(\"단수 동사 여부\")\n```",
    "rule": "→ 동명사 주어는 하나의 행위/개념이므로 보통 단수 취급합니다.\n→ 동명사구 안의 목적어·수식어까지 주어에 포함합니다.",
    "traps": [
      "V-ing를 현재분사로 착각",
      "긴 동명사구 뒤 본동사 위치를 놓침"
    ],
    "questions": [
      "V-ing가 명사처럼 쓰였는가?"
    ],
    "examples": [
      9,
      10,
      21,
      26,
      29,
      30,
      67,
      88,
      90,
      118
    ],
    "keywords": [
      "-ing"
    ]
  },
  {
    "id": "P06",
    "name": "명사절 주어: that/what/who/how/whatever/whoever",
    "category": "어법 패턴",
    "summary": "절 전체가 주어 자리에 오는 구조",
    "tree": "```python\nif 문장 앞에 접속사/의문사절:\n    mark(\"절 전체 = 주어\")\n    find(\"본동사\")\n```",
    "rule": "→ That S V가 주어이면 that은 생략하지 않습니다.\n→ what/whatever/whoever는 자체가 명사 역할을 포함합니다.\n→ 의문사절은 의문문 어순이 아니라 평서문 어순입니다.",
    "traps": [
      "That절 주어의 that 생략",
      "Who built를 의문문으로 착각해 did를 넣는 오류",
      "what과 that 혼동"
    ],
    "questions": [
      "절이 명사 한 덩어리로 주어 역할을 하는가?"
    ],
    "examples": [
      11,
      13,
      14,
      15,
      16,
      23,
      24
    ],
    "keywords": [
      "that",
      "what",
      "who",
      "how",
      "whatever",
      "whoever"
    ]
  },
  {
    "id": "P07",
    "name": "긴 주어 + 본동사 찾기",
    "category": "어법 패턴",
    "summary": "수식어가 길어져도 핵심 주어와 본동사를 찾아야 함",
    "tree": "```python\nfind(\"핵심 주어\")\nskip(\"전치사구/분사구/관계사절\")\nfind(\"본동사\")\ncheck(\"수 일치 / 태 / 시제\")\n```",
    "rule": "→ 주어 뒤 수식어는 주어의 수를 바꾸지 않습니다.\n→ 긴 주어일수록 본동사 위치를 먼저 표시합니다.",
    "traps": [
      "가까운 명사에 동사를 일치시키는 오류",
      "수식어 안 동사를 본동사로 착각"
    ],
    "questions": [
      "문장 전체에서 진짜 주어-동사 골격은 무엇인가?"
    ],
    "examples": [
      17,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      76,
      81,
      101,
      112,
      123
    ],
    "keywords": [
      "long subject",
      "main verb"
    ]
  },
  {
    "id": "P08",
    "name": "가주어 it + 진주어",
    "category": "어법 패턴",
    "summary": "it은 형식상 주어, 진짜 내용은 뒤의 that/to/whether절",
    "tree": "```python\nif It is/It takes/It matters로 시작:\n    mark(\"it = 가주어 가능성\")\n    find(\"뒤쪽 진주어\")\n```",
    "rule": "→ It is + 형용사/명사 + that S V\n→ It is + 형용사 + for 목적격 + to V\n→ It takes + 사람 + 시간 + to V\n→ It doesn’t matter whether S V",
    "traps": [
      "it을 앞 문장 지시대명사로 오해",
      "진주어 절의 접속사 whether/that 누락"
    ],
    "questions": [
      "it이 실제 대상을 가리키는가, 뒤 내용을 받는가?"
    ],
    "examples": [
      12,
      32,
      39,
      42,
      48,
      79,
      82
    ],
    "keywords": [
      "it",
      "to",
      "that",
      "whether"
    ]
  },
  {
    "id": "P09",
    "name": "강조구문 It is/was ~ that",
    "category": "어법 패턴",
    "summary": "It is A that B = 바로 A가 B하다",
    "tree": "```python\nif It is/was + 강조어 + that:\n    remove(\"It is/was ... that\")\n    if 남은 문장이 완전하면:\n        classify(\"강조구문\")\n```",
    "rule": "→ 강조구문은 It is/was와 that을 빼도 문장 골격이 남습니다.\n→ 강조 대상은 주어·목적어·부사구 등이 될 수 있습니다.",
    "traps": [
      "It is a fact that과 혼동",
      "that절 완전성 확인 누락"
    ],
    "questions": [
      "It is와 that을 제거해도 문장이 되는가?"
    ],
    "examples": [
      40,
      43
    ],
    "keywords": [
      "it",
      "that"
    ]
  },
  {
    "id": "P10",
    "name": "수동태 / 조동사 + 수동태",
    "category": "어법 패턴",
    "summary": "be/get p.p. 또는 조동사 be p.p.",
    "tree": "```python\nif be/get + p.p.:\n    mark(\"수동 가능성\")\n    if 조동사 + be + p.p.:\n        check(\"조동사 뒤 동사원형 be\")\n```",
    "rule": "→ 조동사 뒤에는 동사원형 be가 옵니다.\n→ 수동태 뒤 목적어가 바로 오지 않는지 확인합니다.\n→ get refined처럼 get + p.p.도 수동 변화 의미가 가능합니다.",
    "traps": [
      "p.p.를 형용사로만 보고 태를 놓침",
      "조동사 뒤 is/are를 쓰는 오류",
      "be p.p. 뒤 목적어를 붙이는 오류"
    ],
    "questions": [
      "주어가 행위를 하는가, 당하는가?"
    ],
    "examples": [
      1,
      3,
      8,
      17,
      38,
      49,
      54,
      76,
      85,
      93,
      94
    ],
    "keywords": [
      "be",
      "p.p.",
      "passive"
    ]
  },
  {
    "id": "P11",
    "name": "관계사절: who/which/that/생략",
    "category": "어법 패턴",
    "summary": "앞 명사를 뒤 절이 수식",
    "tree": "```python\nif 명사 뒤 who/which/that 또는 절:\n    identify(\"선행사\")\n    check(\"관계사절 안 빈자리\")\n```",
    "rule": "→ 관계사절은 선행사를 꾸미며 절 안에 빈자리가 있습니다.\n→ 목적격 관계대명사는 생략될 수 있습니다.\n→ 계속적 용법 which는 앞 절 전체를 받을 수도 있습니다.",
    "traps": [
      "that 명사절과 관계대명사 that 혼동",
      "관계사절 안이 완전한데 관계대명사로 착각",
      "선행사와 동사 수 일치 놓침"
    ],
    "questions": [
      "앞 명사가 있고 뒤 절에 빈자리가 있는가?"
    ],
    "examples": [
      5,
      7,
      14,
      19,
      20,
      24,
      30,
      38,
      45,
      60,
      62,
      68,
      74,
      75,
      80,
      81,
      84,
      87,
      101,
      109,
      111,
      112,
      119,
      120,
      122
    ],
    "keywords": [
      "who",
      "which",
      "that"
    ]
  },
  {
    "id": "P12",
    "name": "분사 후치수식 / 분사구문",
    "category": "어법 패턴",
    "summary": "V-ing/p.p.가 명사 뒤에서 수식하거나 절을 압축",
    "tree": "```python\nif 명사 뒤 V-ing/p.p.:\n    if 명사와 능동 관계:\n        use(\"V-ing\")\n    else:\n        use(\"p.p.\")\n```",
    "rule": "→ 능동·진행 느낌은 V-ing, 수동·완료 느낌은 p.p.\n→ 분사구문은 부사절을 줄인 구조로 시간/이유/동시상황 등을 나타냅니다.",
    "traps": [
      "p.p. 후치수식을 수동태 본동사로 착각",
      "V-ing를 동명사로만 해석",
      "분사구문 주어 확인 누락"
    ],
    "questions": [
      "분사가 명사를 꾸미는가, 문장 전체에 부사 역할을 하는가?"
    ],
    "examples": [
      4,
      17,
      18,
      51,
      55,
      93,
      94,
      95,
      101
    ],
    "keywords": [
      "V-ing",
      "p.p.",
      "participle"
    ]
  },
  {
    "id": "P13",
    "name": "병렬구조 and/or/but",
    "category": "어법 패턴",
    "summary": "같은 문법 단위끼리 연결되어야 함",
    "tree": "```python\nif and/or/but 병렬이 보임:\n    identify(\"A와 B\")\n    check(\"품사/형태/역할이 같은가\")\n```",
    "rule": "→ 병렬 요소는 문법적 역할이 같아야 합니다.\n→ to V, V-ing, 명사구, 절끼리 병렬되는지 확인합니다.\n→ not A but B는 A가 아니라 B라는 대비 구조입니다.",
    "traps": [
      "A와 B의 범위를 잘못 잡음",
      "to V와 V-ing를 어색하게 병렬",
      "중간 삽입구 때문에 병렬 기준을 놓침"
    ],
    "questions": [
      "무엇과 무엇이 같은 자격으로 연결되는가?"
    ],
    "examples": [
      1,
      3,
      4,
      7,
      15,
      20,
      22,
      33,
      34,
      35,
      36,
      40,
      43,
      45,
      47,
      49,
      55,
      57,
      68,
      72,
      74,
      75,
      81,
      89,
      91,
      97,
      112,
      113,
      123,
      125
    ],
    "keywords": [
      "and",
      "or",
      "but"
    ]
  },
  {
    "id": "P14",
    "name": "to부정사 목적어 / 동사 뒤 to V",
    "category": "어법 패턴",
    "summary": "특정 동사 뒤 to V가 목적어로 옴",
    "tree": "```python\nif 동사 뒤에 to V:\n    check(\"동사가 to V를 목적어로 취하는가\")\n```",
    "rule": "→ decide/choose/want/tend 등은 뒤에 to V를 자주 취합니다.\n→ remember/forget/regret/try는 to V와 V-ing 의미 차이가 큽니다.",
    "traps": [
      "to V를 목적보어로 착각",
      "remember to V와 remember V-ing 의미 혼동"
    ],
    "questions": [
      "to V가 목적어인가, 앞 명사 수식인가, 목적 의미인가?"
    ],
    "examples": [
      6,
      44,
      46,
      49,
      50,
      52,
      54,
      56,
      57,
      74,
      79,
      80
    ],
    "keywords": [
      "to V"
    ]
  },
  {
    "id": "P15",
    "name": "동명사 목적어 / 전치사 뒤 V-ing",
    "category": "어법 패턴",
    "summary": "전치사 뒤와 일부 동사 뒤에는 V-ing",
    "tree": "```python\nif 전치사 뒤에 동사 필요:\n    use(\"V-ing\")\nif consider/postpone/stop/appreciate 등:\n    use(\"V-ing 목적어\")\n```",
    "rule": "→ 전치사 뒤 동사는 동명사입니다.\n→ consider/postpone/stop/appreciate/give up 등은 V-ing를 목적어로 취합니다.\n→ 소유격/목적격 + V-ing는 동명사의 의미상 주어가 될 수 있습니다.",
    "traps": [
      "전치사 뒤 to V 오류",
      "stop to V와 stop V-ing 의미 혼동",
      "소유격 + V-ing 구조를 목적어+분사로 착각"
    ],
    "questions": [
      "앞에 전치사가 있는가? 동사가 V-ing를 요구하는가?"
    ],
    "examples": [
      33,
      36,
      37,
      48,
      49,
      51,
      53,
      55,
      57,
      58,
      72,
      88,
      114
    ],
    "keywords": [
      "V-ing",
      "preposition"
    ]
  },
  {
    "id": "P16",
    "name": "remember/forget/regret/try/stop + to V vs V-ing",
    "category": "어법 패턴",
    "summary": "to V는 미래/해야 할 일, V-ing는 과거/이미 한 일인 경우가 많음",
    "tree": "```python\nif verb in [remember, forget, regret, try, stop]:\n    if 뒤가 to V:\n        meaning(\"앞으로/목적/시도\")\n    elif 뒤가 V-ing:\n        meaning(\"과거 경험/이미 한 일/중단\")\n```",
    "rule": "→ remember to V: 잊지 말고 ~하다 / remember V-ing: ~했던 것을 기억하다\n→ forget to V: ~할 것을 잊다 / forget V-ing: ~했던 것을 잊다\n→ regret to V: 유감스럽게도 ~하다 / regret V-ing: ~한 것을 후회하다\n→ try to V: ~하려고 애쓰다 / try V-ing: 시험 삼아 ~해 보다\n→ stop to V: ~하려고 멈추다 / stop V-ing: ~하는 것을 멈추다",
    "traps": [
      "뜻 차이를 외우지 않고 형태만 보는 것",
      "문맥상 과거 경험인지 앞으로 할 일인지 확인하지 않음"
    ],
    "questions": [
      "그 행동이 이미 일어난 일인가, 앞으로 할 일인가?"
    ],
    "examples": [
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58
    ],
    "keywords": [
      "remember",
      "forget",
      "regret",
      "try",
      "stop"
    ]
  },
  {
    "id": "P17",
    "name": "목적어 명사절: that/whether/if/의문사절",
    "category": "어법 패턴",
    "summary": "동사 뒤 절 전체가 목적어 역할",
    "tree": "```python\nif 동사 뒤 접속사/의문사 + S V:\n    mark(\"명사절 목적어\")\n    check(\"평서문 어순\")\n```",
    "rule": "→ realize/say/tell/question/wonder/forget/remember/guarantee/choose 등 뒤에 명사절 가능.\n→ 간접의문문은 의문문 어순이 아니라 주어+동사 어순입니다.\n→ that 목적어절은 생략될 수 있습니다.",
    "traps": [
      "간접의문문에 do/does/did를 넣는 오류",
      "whether와 if의 쓰임 혼동",
      "that 관계사절과 that 명사절 혼동"
    ],
    "questions": [
      "동사가 “무엇을?”의 답으로 절을 받는가?"
    ],
    "examples": [
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      74,
      75,
      77,
      92,
      123
    ],
    "keywords": [
      "that",
      "whether",
      "if",
      "what",
      "how"
    ]
  },
  {
    "id": "P18",
    "name": "전치사의 목적어: 명사/동명사/명사절",
    "category": "어법 패턴",
    "summary": "전치사 뒤에는 명사 역할 덩어리가 옴",
    "tree": "```python\nif 전치사 발견:\n    check(\"뒤가 명사구 / V-ing / 명사절인가\")\n```",
    "rule": "→ 전치사 뒤에는 명사, 대명사, 동명사, 명사절이 옵니다.\n→ what/how 등 명사절이 전치사의 목적어가 될 수 있습니다.",
    "traps": [
      "전치사 뒤 동사원형을 쓰는 오류",
      "전치사구를 본동사 구조로 착각",
      "relative to / with / by / of 등 관용 결합 놓침"
    ],
    "questions": [
      "전치사 뒤가 명사 역할을 하는가?"
    ],
    "examples": [
      70,
      71,
      72,
      73,
      88,
      96,
      103,
      106,
      113,
      114,
      124
    ],
    "keywords": [
      "preposition",
      "V-ing",
      "noun clause"
    ]
  },
  {
    "id": "P19",
    "name": "주격보어: to V / V-ing / 명사절 / 형용사",
    "category": "어법 패턴",
    "summary": "be동사 뒤에서 주어를 설명하는 덩어리",
    "tree": "```python\nif S + be + 뒤 구조:\n    classify(\"주격보어\")\n    check(\"주어 설명인가\")\n```",
    "rule": "→ 보어는 주어의 정체·상태·내용을 설명합니다.\n→ 주어가 way/thing/question/present 등일 때 뒤에 to V/that/whether/what절이 자주 옵니다.",
    "traps": [
      "보어절을 목적어절로 착각",
      "to부정사 보어와 형용사적 to부정사 혼동"
    ],
    "questions": [
      "be동사 뒤가 주어를 설명하는가?"
    ],
    "examples": [
      22,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      83,
      97,
      107
    ],
    "keywords": [
      "be",
      "complement",
      "to V",
      "V-ing"
    ]
  },
  {
    "id": "P20",
    "name": "SVO + to V / 목적격보어 to V",
    "category": "어법 패턴",
    "summary": "목적어가 to V하도록 만드는 구조",
    "tree": "```python\nif 동사 + 목적어 + to V:\n    if 동사가 cause/allow/enable/encourage/persuade/expect 류:\n        classify(\"목적격보어 to V\")\n```",
    "rule": "→ cause/allow/enable/encourage/persuade/expect 등은 O + to V 구조를 만듭니다.\n→ 목적어가 to V의 의미상 주어가 됩니다.",
    "traps": [
      "to V를 목적어로 착각",
      "목적어와 to V의 의미 관계 확인 누락"
    ],
    "questions": [
      "누가 to V하는가? → 바로 앞 목적어라면 목적격보어 가능"
    ],
    "examples": [
      27,
      35,
      84,
      85,
      87
    ],
    "keywords": [
      "object",
      "to V"
    ]
  },
  {
    "id": "P21",
    "name": "지각/사역/준사역: O + 원형/분사/p.p.",
    "category": "어법 패턴",
    "summary": "see/hear/let/have/keep 뒤 목적격보어 형태",
    "tree": "```python\nif 동사 in [see, hear, let, have, keep]:\n    find(\"목적어\")\n    if 목적어가 직접 행동:\n        use(\"원형/V-ing\")\n    elif 목적어가 당함:\n        use(\"p.p.\")\n```",
    "rule": "→ 지각동사 hear/see + O + 동사원형: 동작 전체를 봄/들음.\n→ let + O + 동사원형.\n→ have + O + p.p.: O가 ~되게 하다.\n→ keep + O + p.p./형용사: O를 ~한 상태로 유지하다.",
    "traps": [
      "let to V ❌",
      "지각동사 뒤 원형과 to V 혼동",
      "have O p.p.를 현재완료로 착각"
    ],
    "questions": [
      "목적어가 직접 하는가, 당하는가, 상태 유지인가?"
    ],
    "examples": [
      89,
      91,
      93,
      94,
      95
    ],
    "keywords": [
      "see",
      "hear",
      "make",
      "have",
      "let",
      "help"
    ]
  },
  {
    "id": "P22",
    "name": "SVOC: 목적어 + 목적격보어 명사/형용사/전명구",
    "category": "어법 패턴",
    "summary": "목적어를 어떤 상태/정체로 만드는 구조",
    "tree": "```python\nif S + V + O + C:\n    check(\"O = C 또는 O가 C 상태\")\n```",
    "rule": "→ make/find/call/consider/treat/feel/leave 등은 목적격보어를 취할 수 있습니다.\n→ 목적격보어가 명사이면 O의 정체, 형용사이면 O의 상태를 설명합니다.",
    "traps": [
      "SVOO와 SVOC 혼동",
      "목적격보어 앞에 불필요한 to be를 넣거나 빼는 오류"
    ],
    "questions": [
      "목적어와 뒤 명사/형용사가 같은 대상인가?"
    ],
    "examples": [
      28,
      44,
      90,
      92,
      116,
      118,
      120,
      123
    ],
    "keywords": [
      "make",
      "find",
      "consider",
      "keep",
      "elect"
    ]
  },
  {
    "id": "P23",
    "name": "SVOO 수여동사 / 명사1 + 명사2",
    "category": "어법 패턴",
    "summary": "누구에게 무엇을 주는 구조",
    "tree": "```python\nif 동사 뒤 명사1 + 명사2:\n    if 명사1 = 사람/수혜자 and 명사2 = 물건/내용:\n        classify(\"SVOO\")\n    else:\n        check(\"SVOC 가능성\")\n```",
    "rule": "→ give/send/make/find/allow/win 등은 SVOO가 가능합니다.\n→ 간접목적어 + 직접목적어 구조입니다.\n→ SVOO는 to/for 전명구로 바꿀 수 있는 경우가 많습니다.",
    "traps": [
      "SVOO와 SVOC 혼동",
      "명사1과 명사2가 같은 대상이면 SVOC, 주고받는 관계이면 SVOO"
    ],
    "questions": [
      "명사1에게 명사2를 주는가?"
    ],
    "examples": [
      61,
      115,
      117,
      119,
      121,
      122
    ],
    "keywords": [
      "give",
      "send",
      "show",
      "tell",
      "find",
      "win"
    ]
  },
  {
    "id": "P24",
    "name": "무생물 주어 / 사물 주어",
    "category": "어법 패턴",
    "summary": "사물이 주어가 되어 cause/make/allow/see/leave 등을 취함",
    "tree": "```python\nif 주어가 사람 아님:\n    check(\"동사가 원인/가능/변화/경험을 나타내는가\")\n    translate(\"~ 때문에 / ~하면 / ~이 ...하게 하다\")\n```",
    "rule": "→ 영어는 사물·시간·경험을 주어로 세워 원인과 결과를 압축합니다.\n→ 한국어 해석은 부사적으로 풀면 자연스러운 경우가 많습니다.",
    "traps": [
      "무생물 주어를 직역해서 의미가 어색해짐",
      "사물 주어 뒤 목적격보어 구조를 놓침"
    ],
    "questions": [
      "사물 주어가 사람/상황에 어떤 결과를 일으키는가?"
    ],
    "examples": [
      27,
      28,
      30,
      31,
      35,
      86,
      87,
      90,
      105,
      111,
      112,
      113,
      122
    ],
    "keywords": [
      "inanimate subject"
    ]
  },
  {
    "id": "P25",
    "name": "비교/유사/가정: than, as if, as though, like",
    "category": "어법 패턴",
    "summary": "비교 대상과 비교 기준을 맞춰야 함",
    "tree": "```python\nif than/as/like/as if/as though 발견:\n    identify(\"비교 대상 A/B\")\n    check(\"품사와 구조 병렬\")\n```",
    "rule": "→ better/more/less/different 등은 비교 대상과 연결됩니다.\n→ as if/as though는 “마치 ~인 것처럼”입니다.\n→ like는 전치사로 명사구를 받을 수 있습니다.",
    "traps": [
      "than 뒤 비교 대상 누락",
      "as if 뒤 시제와 사실성 판단 놓침",
      "like와 as 혼동"
    ],
    "questions": [
      "무엇과 무엇을 비교/비유하는가?"
    ],
    "examples": [
      18,
      29,
      55,
      92,
      104,
      106,
      107
    ],
    "keywords": [
      "than",
      "as if",
      "as though",
      "like"
    ]
  },
  {
    "id": "P26",
    "name": "부사절 접속사 when/while/if/until/because",
    "category": "어법 패턴",
    "summary": "접속사가 시간·조건·이유·대비를 만듦",
    "tree": "```python\nif 접속사절 발견:\n    classify(\"시간/조건/이유/대비\")\n    find(\"주절\")\n```",
    "rule": "→ when/while/until은 시간, if는 조건, because는 이유입니다.\n→ while은 “동안”뿐 아니라 대비 의미도 가능합니다.\n→ 부사절 안에도 명사절/관계절이 들어갈 수 있습니다.",
    "traps": [
      "부사절만 보고 문장 끝난 줄 착각",
      "부사절 속 동사를 본동사로 착각",
      "while 의미를 하나로 고정"
    ],
    "questions": [
      "이 절이 조건/시간/이유/대비를 말하는가?"
    ],
    "examples": [
      6,
      9,
      15,
      19,
      25,
      29,
      48,
      55,
      56,
      58,
      61,
      64,
      65,
      77,
      82,
      83,
      92,
      94,
      99,
      102,
      104,
      106,
      107,
      114,
      116
    ],
    "keywords": [
      "when",
      "while",
      "if",
      "until",
      "because"
    ]
  },
  {
    "id": "P27",
    "name": "what/whatever/whoever 계열",
    "category": "어법 패턴",
    "summary": "선행사를 포함하는 관계대명사형 명사절",
    "tree": "```python\nif what/whatever/whoever 보임:\n    check(\"선행사 없음\")\n    read(\"what = the thing(s) that\")\n```",
    "rule": "→ what은 선행사를 포함하므로 앞에 명사를 따로 두지 않습니다.\n→ whatever/whoever는 명사절로 쓰일 수 있습니다.\n→ 절 안 빈자리와 전체 절의 역할을 모두 확인합니다.",
    "traps": [
      "what 앞에 선행사를 붙이는 오류",
      "whatever를 무조건 양보절로 해석",
      "whoever를 단순 의문사로만 처리"
    ],
    "questions": [
      "선행사가 따로 있는가?"
    ],
    "examples": [
      6,
      13,
      16,
      21,
      23,
      24,
      67,
      69,
      71,
      74,
      75,
      78,
      81,
      92
    ],
    "keywords": [
      "what",
      "whatever",
      "whoever"
    ]
  },
  {
    "id": "P28",
    "name": "현재완료 / 현재완료수동",
    "category": "어법 패턴",
    "summary": "과거부터 현재까지의 연결",
    "tree": "```python\nif have/has + p.p.:\n    classify(\"현재완료\")\n    if have/has + been + p.p.:\n        classify(\"현재완료수동\")\n```",
    "rule": "→ have/has p.p.는 완료·경험·계속·결과를 나타냅니다.\n→ have/has been p.p.는 현재완료수동입니다.",
    "traps": [
      "단순과거와 혼동",
      "has been asked에서 been을 빼는 오류"
    ],
    "questions": [
      "과거 사건이 현재와 연결되는가?"
    ],
    "examples": [
      2,
      14,
      31,
      99
    ],
    "keywords": [
      "have",
      "has",
      "been",
      "since"
    ]
  },
  {
    "id": "P29",
    "name": "간접의문문 / 의문사 명사절",
    "category": "어법 패턴",
    "summary": "의문사 + 주어 + 동사 어순",
    "tree": "```python\nif 의문사절이 명사 역할:\n    check(\"평서문 어순\")\n```",
    "rule": "→ 간접의문문은 의문문 어순이 아니라 주어+동사 어순입니다.\n→ 의문사절 전체가 주어/목적어/보어/전치사 목적어가 될 수 있습니다.",
    "traps": [
      "직접의문문 어순으로 바꾸는 오류",
      "what/how/when 뒤 주어-동사 위치를 놓침"
    ],
    "questions": [
      "의문사절이 문장 속 한 성분인가?"
    ],
    "examples": [
      14,
      15,
      64,
      65,
      66,
      67,
      73,
      77,
      92
    ],
    "keywords": [
      "what",
      "how",
      "who",
      "whether",
      "if"
    ]
  },
  {
    "id": "P30",
    "name": "목적/결과 to V / in order to",
    "category": "어법 패턴",
    "summary": "to V가 “~하기 위해” 목적을 나타냄",
    "tree": "```python\nif to V가 문장 뒤에 있음:\n    if 앞 동사의 목적/의도 설명:\n        classify(\"부사적 용법: 목적\")\n    if in order to:\n        mark(\"목적 강조\")\n```",
    "rule": "→ in order to V = ~하기 위해서.\n→ to V는 목적, 결과, 판단 근거 등 여러 부사적 의미가 가능합니다.\n→ 목적일 때는 in order to로 바꿔도 자연스러운 경우가 많습니다.",
    "traps": [
      "앞 명사를 꾸미는 형용사적 to V와 혼동",
      "목적어 to V와 부사적 to V를 구분하지 않음"
    ],
    "questions": [
      "왜/무엇을 위해 하는가?"
    ],
    "examples": [
      6,
      72,
      75,
      85,
      115,
      125
    ],
    "keywords": [
      "to",
      "in order to"
    ]
  },
  {
    "id": "P31",
    "name": "not A but B / 대조 구조",
    "category": "어법 패턴",
    "summary": "A가 아니라 B를 강조",
    "tree": "```python\nif not A but B 구조:\n    identify(\"A\")\n    identify(\"B\")\n    check(\"A와 B의 형태가 같은가\")\n```",
    "rule": "→ not A but B는 A를 부정하고 B를 강조합니다.\n→ A와 B는 문법적으로 같은 자리에 놓여야 합니다.",
    "traps": [
      "not의 범위를 잘못 잡음",
      "A/B 병렬 형태 불일치"
    ],
    "questions": [
      "무엇을 부정하고 무엇을 강조하는가?"
    ],
    "examples": [
      40,
      41,
      49,
      110
    ],
    "keywords": [
      "not",
      "but"
    ]
  },
  {
    "id": "P32",
    "name": "대명사/지시어 it, that, those, one",
    "category": "어법 패턴",
    "summary": "대명사가 무엇을 받는지 확인",
    "tree": "```python\nif 대명사 발견:\n    find(\"앞에서 받은 대상\")\n    classify(\"단수/복수/사람/사물/절\")\n```",
    "rule": "→ one은 일반 사람/사물 하나를 받을 수 있습니다.\n→ those는 복수명사 대용입니다.\n→ that은 앞 내용 전체 또는 특정 명사를 받을 수 있습니다.",
    "traps": [
      "it이 가주어인지 지시대명사인지 혼동",
      "that 관계사/접속사/지시대명사 구분 실패"
    ],
    "questions": [
      "이 대명사가 앞의 무엇을 대신하는가?"
    ],
    "examples": [
      4,
      12,
      13,
      38,
      41,
      69,
      97,
      116
    ],
    "keywords": [
      "it",
      "that",
      "those",
      "one"
    ]
  },
  {
    "id": "P33",
    "name": "동격/삽입/예시 such as, including, like",
    "category": "어법 패턴",
    "summary": "추가 정보가 핵심 골격을 끊고 들어옴",
    "tree": "```python\nif comma/including/such as/like 삽입구:\n    bracket(\"삽입 정보\")\n    remove(\"삽입 정보\")\n    check(\"남은 주어-동사 골격\")\n```",
    "rule": "→ including, such as, like는 예시를 덧붙입니다.\n→ 동격/삽입은 문장 골격을 흐리지 않도록 괄호 처리합니다.",
    "traps": [
      "삽입구 안 명사를 주어로 착각",
      "such as 뒤 예시를 본문 핵심 구조로 오해"
    ],
    "questions": [
      "빼도 문장 골격이 유지되는가?"
    ],
    "examples": [
      4,
      47,
      88,
      101,
      124,
      125
    ],
    "keywords": [
      "such as",
      "including",
      "like"
    ]
  },
  {
    "id": "P34",
    "name": "enough to / too ~ to 경계 패턴",
    "category": "어법 패턴",
    "summary": "이번 125문장에는 직접 예문이 약함. so/such~that과 비교 암기",
    "tree": "```python\nif enough/too 발견:\n    if enough:\n        use(\"형/부 + enough + to V\")\n    elif too:\n        use(\"too + 형/부 + to V\")\n    compare(\"so ~ that과 의미 전환 가능\")\n```",
    "rule": "→ 형/부 + enough + to V = ~할 만큼 충분히 ...하다.\n→ too + 형/부 + to V = 너무 ...해서 ~할 수 없다.\n→ so ~ that은 절을, enough/too는 to V를 이끄는 경우가 많습니다.",
    "traps": [
      "enough 위치 오류: enough good ❌ / good enough ⭕",
      "too와 very 혼동"
    ],
    "questions": [
      "정도 표현 뒤에 절이 오는가, to V가 오는가?"
    ],
    "examples": [
      5,
      48,
      99,
      123
    ],
    "keywords": [
      "enough",
      "too",
      "so",
      "such"
    ]
  },
  {
    "id": "P35",
    "name": "SV 뒤 명사/형용사/전명구 기본 보어·목적어 구조",
    "category": "어법 패턴",
    "summary": "짧아 보여도 SV 뒤 덩어리의 역할을 구분해야 함",
    "tree": "```python\nfind(\"S + V\")\nlook(\"V 뒤 명사/형용사/전명구\")\nclassify(\"목적어 / 보어 / 수식 전명구\")\n```",
    "rule": "→ SV 뒤 명사가 항상 목적어는 아닙니다. be동사 뒤면 보어일 수 있습니다.\n→ 전명구는 보어처럼 필수일 수도, 단순 수식어일 수도 있습니다.\n→ feel + 명사/형용사처럼 연결동사류도 확인합니다.",
    "traps": [
      "전명구를 빼면 문장이 어색해지는 필수 보어 구조를 놓침",
      "feel a fool처럼 형용사 없이 명사가 보어로 온 구조를 놓침",
      "동사의 성격을 확인하지 않고 모두 SVO로 처리"
    ],
    "questions": [
      "V 뒤 덩어리가 목적어인가, 주어 설명인가, 단순 수식인가?"
    ],
    "examples": [
      96,
      98,
      100,
      102,
      103,
      104,
      105,
      106,
      107,
      108
    ],
    "keywords": [
      "be",
      "complement",
      "object"
    ]
  }
];
