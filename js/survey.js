// 설문 데이터 정의
const surveyQuestions = [
  {
    id: 1,
    category: "투자 성향",
    question: "투자 결정을 내릴 때 무엇을 가장 중요하게 생각합니까?",
    options: [
      { text: "안정성", value: 1 },
      { text: "수익성", value: 2 },
      { text: "유동성", value: 3 },
    ],
  },
  {
    id: 2,
    category: "투자 성향",
    question: "당신은 주식 시장의 변동성에 어떻게 반응하나요?",
    options: [
      { text: "신경 쓰지 않는다.", value: 1 },
      { text: "약간 걱정한다.", value: 2 },
      { text: "매우 불안하다.", value: 3 },
    ],
  },
  {
    id: 3,
    category: "투자 성향",
    question: "새로운 투자 기회를 접할 때 어떻게 반응합니까?",
    options: [
      { text: "신중히 검토한다.", value: 1 },
      { text: "즉시 실행한다.", value: 2 },
      { text: "무시한다.", value: 3 },
    ],
  },

  {
    id: 4, 
    category: "투자 성향", 
    question: "당신의 투자에 가장 영향을 끼치는 사람은 누구입니까?",
    options: [
      { text: "스스로의 판단", value: 1 }, 
      { text: "금융 전문가나 주식 유튜버", value: 2 }, 
      { text: "친구나 가족"}
    ],
  }, 

  {
    id: 5,
    category: "위험 선호도",
    question: "당신은 얼마나 많은 위험을 감수할 준비가 되어 있습니까?",
    options: [
      { text: "전혀 감수하지 않는다.", value: 1 },
      { text: "약간 감수한다.", value: 2 },
      { text: "많이 감수한다.", value: 3 },
    ],
  },
  {
    id: 6,
    category: "위험 선호도",
    question: "손실 가능성이 높은 투자에 어떻게 접근합니까?",
    options: [
      { text: "피한다.", value: 1 },
      { text: "신중히 고려한다.", value: 2 },
      { text: "적극적으로 참여한다.", value: 3 },
    ],
  },
  {
    id: 7,
    category: "위험 선호도",
    question: "당신은 10%의 손실 가능성이 있는 투자에서 20%의 수익을 얻을 기회를 선택하시겠습니까?",
    options: [
      { text: "예", value: 3 },
      { text: "헷지한다", value: 2},
      { text: "아니요", value: 1 },
    ],
  },
  {
    id: 8,
    category: "시간 선호도",
    question: "당신의 투자 목표는 무엇입니까?",
    options: [
      { text: "장기 성장", value: 1 },
      { text: "중기 성과", value: 2 },
      { text: "단기 이익", value: 3 },
    ],
  },
  {
    id: 9,
    category: "시간 선호도",
    question: "당신은 얼마나 자주 포트폴리오를 검토합니까?",
    options: [
      { text: "매일", value: 3 },
      { text: "매주", value: 2 },
      { text: "매달", value: 1 },
    ],
  },
  {
    id: 10,
    category: "시간 선호도",
    question: "장기 투자가 단기 이익보다 중요하다고 생각하십니까?",
    options: [
      { text: "동의한다.", value: 3 },
      { text: "동의하지 않는다.", value: 1 },
    ],
  },
  {
    id: 11,
    category: "감정적 반응",
    question: "투자에서 손실이 발생했을 때 어떻게 대처합니까?",
    options: [
      { text: "침착하게 대응한다.", value: 3 },
      { text: "걱정하지만 행동을 바꾸지 않는다.", value: 2 },
      { text: "즉시 매도한다.", value: 1 },
    ],
  },
  { 
    id: 12,
    category: "감정적 반응",
    question: "투자 성공 시 어떻게 느끼십니까?",
    options: [
      { text: "기쁘지만 자제한다.", value: 3 },
      { text: "자랑스럽다.", value: 2 },
      { text: "과도한 자신감을 느낀다.", value: 1 },
    ],
  },

  {
    id: 13,
    category: "감정적 반응",
    question: "다른 사람들의 투자 성공 소식을 들으면 어떻게 반응합니까?",
    options: [
      { text: "동기 부여를 받는다.", value: 3 }, 
      { text: "무관심하다.", value: 2 }, 
      { text: "질투를 느낀다.", value: 1},
    ],
  },

  {
    id: 14,
    category: "정보 처리 방식",
    question: "마이크로 투자 방식에 관한 내용을 들었을 때, 당신은 어떻게 하겠습니까?",
    options: [
      { text: "전반적인 상황을 살펴본 후 그 움직임에 따라 행동하는 주식을 찾아본다.", value: 3 },
      { text: "모의 테스트를 진행해본다.", value: 2 },
      { text: "실제 투자에 곧바로 적용해본다다", value: 1 },
    ],
  },
  {
    id: 15,
    category: "정보 처리 방식",
    question: "새로운 정보를 접했을 때 어떻게 반응합니까?",
    options: [
      { text: "추가 확인을 한다.", value: 3 },
      { text: "즉시 행동에 옮긴다.", value: 2 },
      { text: "무시한다.", value: 1 },
    ],
  },
  {
    id: 16,
    category: "정보 처리 방식",
    question: "투자 결정을 내릴 때 감정에 의존하십니까?",
    options: [
      { text: "절대 아니다.", value: 3 },
      { text: "어느 정도 의존한다.", value: 2 },
      { text: "매우 의존한다.", value: 1 },
    ],
  },
  {
    id: 17,
    category: "결정 스타일",
    question: "투자 결정을 내릴 때 시간이 얼마나 걸립니까?",
    options: [
      { text: "며칠 정도 검토한다.", value: 3 },
      { text: "몇 주 동안 숙고한다.", value: 2 },
      { text: "즉시 결정한다.", value: 1 },
    ],
  },
  {
    id: 18,
    category: " ",
    question: "다른 사람의 조언을 얼마나 신뢰하십니까?",
    options: [
      { text: "신중히 고려한다.", value: 3 },
      { text: "적극적으로 따른다.", value: 2 },
      { text: "전혀 신뢰하지 않는다.", value: 1 },
    ],
  },
  {
    id: 19,
    category: "결정 스타일",
    question: "어떤 투자 전략을 선호합니까?",
    options: [
      { text: "혼합 전략", value: 3 },
      { text: "방어적 투자", value: 2 },
      { text: "적극적 투자", value: 1 },
    ],
  },
  {
    id: 20,
    category: "자산 분배",
    question: "자산 분배를 계획할 때 주요 기준은 무엇입니까?",
    options: [
      { text: "위험 분산", value: 3 },
      { text: "수익 극대화", value: 2 },
      { text: "유동성 확보", value: 1 },
    ],
  },
  {
    id: 21,
    category: "자산 분배",
    question: "부동산, 주식, 채권 중 어디에 가장 많은 자산을 투자합니까?",
    options: [
      { text: "채권", value: 3 },
      { text: "주식", value: 2 },
      { text: "부동산", value: 1 },
    ],
  },
  {
    id: 22,
    category: "기술 활용",
    question: "투자 플랫폼 또는 앱을 사용하는 빈도는 얼마나 되나요?",
    options: [
      { text: "자주 사용한다.", value: 3 },
      { text: "가끔 사용한다.", value: 2 },
      { text: "거의 사용하지 않는다.", value: 1 },
    ],
  },
  {
    id: 23,
    category: "기술 활용",
    question: "알고리즘 기반 투자 전략을 신뢰합니까?",
    options: [
      { text: "매우 신뢰한다.", value: 3 },
      { text: "보통이다.", value: 2 },
      { text: "신뢰하지 않는다.", value: 1 },
    ],
  },
  {
    id: 24,
    category: "목표 설정",
    question: "당신의 최우선 투자 목표는 무엇입니까?",
    options: [
      { text: "은퇴 준비", value: 3 },
      { text: "자산 증식", value: 2 },
      { text: "단기적인 재정 목표", value: 1 },
    ],
  },

  {
    id: 25,
    category: "투자와 인생의 상관관계",
    question: "투자가 당신의 삶에서 차지하는 비중은 어느 정도입니까?",
    options: [
      { text: "아주 중요하다", value: 3 },
      { text: "중간 정도이다", value: 2 },
      { text: "별로 중요하지 않다", value: 1 },
    ],
  },
  {
    id: 26,
    category: "투자와 인생의 상관관계",
    question: "투자를 통해 가장 이루고 싶은 삶의 변화는 무엇입니까?",
    options: [
      { text: "재정적 안정", value: 3 },
      { text: "삶의 질 향상", value: 2 },
      { text: "단기적인 필요 해결", value: 1 },
    ],
  },
  {
    id: 27,
    category: "투자와 인생의 상관관계",
    question: "투자 성공이 당신의 삶에 어떤 가치를 더한다고 생각합니까?",
    options: [
      { text: "자유와 선택의 폭을 넓힌다", value: 3 },
      { text: "단기적인 재정 문제를 해결한다", value: 2 },
      { text: "큰 변화를 기대하지 않는다", value: 1 },
    ],
  },
  {
    id: 28,
    category: "투자와 인생의 상관관계",
    question: "당신은 투자 결정을 내릴 때 인생의 어떤 가치를 가장 중요하게 고려합니까?",
    options: [
      { text: "가족의 안정과 행복", value: 3 },
      { text: "개인의 성취와 성장", value: 2 },
      { text: "즉각적인 필요 충족", value: 1 },
    ],
  },
  {
    id: 29,
    category: "투자와 인생의 상관관계",
    question: "투자가 당신의 미래에 어떤 영향을 미칠 것이라고 생각하십니까?",
    options: [
      { text: "장기적인 안정성을 제공한다", value: 3 },
      { text: "성공의 기반을 마련한다", value: 2 },
      { text: "미래를 크게 변화시키지 않는다", value: 1 },
    ],
  },
  {
    id: 30,
    category: "투자와 인생의 상관관계",
    question: "투자 성과가 좋지 않을 때, 삶의 다른 영역에도 영향을 미칩니까?",
    options: [
      { text: "큰 영향을 미친다", value: 3 },
      { text: "약간 영향을 미친다", value: 2 },
      { text: "전혀 영향을 미치지 않는다", value: 1 },
    ],
  },
  {
    id: 31,
    category: "투자와 인생의 상관관계",
    question: "투자를 시작할 때 가장 큰 동기는 무엇이었습니까?",
    options: [
      { text: "더 나은 미래를 위한 준비", value: 3 },
      { text: "추가적인 수입 창출", value: 2 },
      { text: "단기적인 목표 달성", value: 1 },
    ],
  },
  {
    id: 32,
    category: "투자와 인생의 상관관계",
    question: "투자를 통해 당신의 삶의 목표와 가치를 얼마나 충족시키고 있다고 생각합니까?",
    options: [
      { text: "매우 충족시키고 있다", value: 3 },
      { text: "부분적으로 충족시키고 있다", value: 2 },
      { text: "충족시키지 못하고 있다", value: 1 },
    ],
  },
  {
    id: 33,
    category: "투자와 인생의 상관관계",
    question: "투자가 당신에게 가장 긍정적인 영향을 미친 순간은 언제였습니까?",
    options: [
      { text: "목표 달성의 기쁨을 느낄 때", value: 3 },
      { text: "재정적 여유를 얻었을 때", value: 2 },
      { text: "큰 영향이 없었다", value: 1 },
    ],
  },
  {
    id: 34,
    category: "투자와 인생의 상관관계",
    question: "투자 성공으로 인해 삶의 어떤 부분이 가장 크게 변화했다고 생각합니까?",
    options: [
      { text: "미래에 대한 안정감", value: 3 },
      { text: "재정적 목표 달성", value: 2 },
      { text: "크게 변화하지 않았다", value: 1 },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const surveyForm = document.getElementById("surveyForm");
  const submitButton = document.getElementById("submitSurvey");

  // 설문 질문 렌더링
  function renderSurvey() {
    surveyQuestions.forEach((question, index) => {
      const questionContainer = document.createElement("div");
      questionContainer.classList.add("question-container");

      // 질문 번호를 포함한 HTML
      questionContainer.innerHTML = `
        <h3>${index + 1}. ${question.category}</h3>
        <p>${question.question}</p>
        ${question.options
          .map(
            (option) => `
          <label>
            <input type="radio" name="question-${question.id}" value="${option.value}">
            ${option.text}
          </label>
        `
          )
          .join("")}
      `;

      surveyForm.appendChild(questionContainer);
    });
  }

  // 점수 계산
  function calculateScores() {
    const scores = {};
    let allChecked = true;

    surveyQuestions.forEach((question) => {
      const selectedOption = document.querySelector(
        `input[name="question-${question.id}"]:checked`
      );

      if (!selectedOption) {
        allChecked = false;
      } else {
        const value = parseInt(selectedOption.value);
        scores[question.category] = (scores[question.category] || 0) + value;
      }
    });

    return { scores, allChecked };
  }

  // 진행 상태 업데이트 함수
  function updateProgressBar() {
    const answeredQuestions = document.querySelectorAll(
      'input[type="radio"]:checked'
    ).length;
    const totalQuestions = surveyQuestions.length;
    const progress = Math.round((answeredQuestions / totalQuestions) * 100);

    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
      progressBar.textContent = `${progress}%`;
    }
  }

  // 각 라디오 버튼 선택 시 진행 바 업데이트
  document.addEventListener("change", (e) => {
    if (e.target.type === "radio") {
      updateProgressBar();
    }
  });

  // 제출 버튼 이벤트 처리
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const { scores, allChecked } = calculateScores();

    if (!allChecked) {
      alert("모든 질문에 답변을 선택해주세요.");
      return;
    }

    // 점수를 로컬 스토리지에 저장
    localStorage.setItem("surveyScores", JSON.stringify(scores));

    // 결과 페이지로 이동
    window.location.href = "result.html";
  });

  // 설문 렌더링 호출
  renderSurvey();
});


// JavaScript to toggle mobile navigation menu
document.addEventListener("DOMContentLoaded", function () {
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const navMenu = document.querySelector("#navmenu");

  mobileNavToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show"); // 'show' 클래스를 토글합니다.
  });
});
