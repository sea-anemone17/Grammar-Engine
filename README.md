# Grammar Engine

문장을 통째로 외우는 대신, 어법 패턴을 **판별 → 설명 → 함정 확인 → 저장 → 복습**하도록 만든 정적 웹앱입니다.

## 파일 구조

```txt
grammar-engine/
├─ index.html
├─ css/
│  └─ style.css
├─ js/
│  ├─ app.js
│  ├─ patterns.js
│  ├─ examples.js
│  ├─ analyzer.js
│  ├─ quiz.js
│  ├─ feedback.js
│  ├─ storage.js
│  └─ stats.js
└─ README.md
```

## 들어간 데이터

- 패턴: 35개
- 예문: 125개
- 데이터 출처: 업로드한 `천일문_고2_중간_어법_패턴_분류노트_TXT_보완판.txt`

## 실행 방법

### 1. 로컬에서 열기

`index.html`을 바로 열어도 대부분 작동하지만, 브라우저 보안 정책 때문에 ES module import가 막힐 수 있습니다.

가장 안전한 방법:

```bash
python -m http.server 8000
```

그 다음 브라우저에서 접속:

```txt
http://localhost:8000
```

### 2. GitHub Pages 배포

1. GitHub에 새 저장소를 만듭니다.
2. 이 폴더 안 파일들을 그대로 업로드합니다.
3. Settings → Pages → Branch를 `main` / root로 설정합니다.
4. 배포 주소로 접속합니다.

## 핵심 기능

- 문장 입력 분석
- 패턴 후보 출력
- 판별 질문/규칙/함정 카드 출력
- 패턴 퀴즈
- localStorage 기반 저장
- 오답/풀이 기록
- 약점 패턴 분석
- 데이터 export

## 확장 방법

새 패턴은 `js/patterns.js`에 아래 형식으로 추가하면 됩니다.

```js
{
  id: "P36",
  name: "수 일치",
  category: "어법 패턴",
  summary: "진짜 주어에 맞는 동사를 고른다.",
  keywords: ["subject", "verb"],
  questions: ["진짜 주어가 무엇인가?", "수식어를 제외했는가?"],
  traps: ["가까운 명사에 동사를 일치시키는 오류"],
  examples: []
}
```

새 예문은 `js/examples.js`에 추가하면 됩니다.

```js
{
  id: 126,
  sentence: "The list of items is on the desk.",
  patterns: ["P36"],
  difficulty: 2
}
```

## 주의

이 앱은 완전한 AI 문법 분석기가 아니라, 시험 대비용 **패턴 후보 탐지 + 사고 훈련 엔진**입니다.
정답을 대신 주기보다, 사용자가 판별 질문을 통해 스스로 구조를 확인하도록 설계되어 있습니다.
