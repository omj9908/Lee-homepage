document.addEventListener("DOMContentLoaded", () => {
  const resultContainer = document.getElementById("resultContainer");

  // 로컬 스토리지에서 설문 데이터를 가져오기
  const scores = JSON.parse(localStorage.getItem("surveyScores")) || {};
  if (Object.keys(scores).length === 0) {
    resultContainer.innerHTML = `
      <div class="alert alert-danger text-center" role="alert">
        결과 데이터가 없습니다. 설문조사를 먼저 완료해주세요.
      </div>`;
    return;
  }

  // 심리 유형 데이터 정의
  const personalityTypes = {
    "투자 성향": [
      { range: [1, 6], type: "보수적인 투자자", advice: "안정성과 원금을 중시하세요." },
      { range: [7, 12], type: "균형 잡힌 투자자", advice: "위험과 수익 간 균형을 유지하세요." },
      { range: [13, 18], type: "공격적인 투자자", advice: "높은 수익을 목표로 적극적으로 투자하세요." },
    ],
    "위험 선호도": [
      { range: [1, 6], type: "위험 회피형", advice: "리스크가 낮은 자산을 선택하세요." },
      { range: [7, 12], type: "위험 중립형", advice: "균형 있는 리스크 관리를 유지하세요." },
      { range: [13, 18], type: "위험 감수형", advice: "높은 수익을 위해 리스크를 감수하세요." },
    ],
    "시간 선호도": [
      { range: [1, 6], type: "단기 목표형", advice: "단기적인 성과를 추구합니다. 단기 상품에 집중하세요." },
      { range: [7, 12], type: "중기 목표형", advice: "중기적인 성과를 추구합니다. 포트폴리오를 점검하세요." },
      { range: [13, 18], type: "장기 목표형", advice: "장기적인 성과를 추구합니다. 안정적인 투자를 유지하세요." },
    ],
    "감정적 반응": [
      { range: [1, 6], type: "침착형", advice: "감정적으로 안정된 투자 태도를 유지하세요." },
      { range: [7, 12], type: "균형형", advice: "감정에 약간 영향을 받지만, 계획적으로 대처하세요." },
      { range: [13, 18], type: "감정적", advice: "감정에 좌우되지 않도록 신중히 검토하세요." },
    ],
    "정보 처리 방식": [
      { range: [1, 6], type: "단순 정보 처리형", advice: "신중하고 간단한 접근 방식을 유지하세요." },
      { range: [7, 12], type: "분석적 처리형", advice: "다양한 정보를 수집하고 분석하는 습관을 유지하세요." },
      { range: [13, 18], type: "즉각 반응형", advice: "빠른 결정과 실행력을 최대한 활용하세요." },
    ],
    "결정 스타일": [
      { range: [1, 6], type: "신중한 의사결정자", advice: "충분히 고려한 후 결정을 내리세요." },
      { range: [7, 12], type: "균형 잡힌 의사결정자", advice: "분석과 실행 사이에서 균형을 유지하세요." },
      { range: [13, 18], type: "즉각적인 의사결정자", advice: "빠른 결정을 내리되, 리스크를 점검하세요." },
    ],
    "자산 분배": [
      { range: [1, 6], type: "보수적인 자산 분배자", advice: "안정적인 자산 분배에 집중하세요." },
      { range: [7, 12], type: "균형 잡힌 자산 분배자", advice: "위험과 수익 간 균형을 유지하세요." },
      { range: [13, 18], type: "공격적인 자산 분배자", advice: "높은 리스크와 수익을 목표로 분배하세요." },
    ],
    "기술 활용": [
      { range: [1, 6], type: "낮은 기술 활용자", advice: "기술 도구를 활용하여 투자의 효율성을 높이세요." },
      { range: [7, 12], type: "중간 기술 활용자", advice: "기술 활용을 유지하며 추가적인 기능을 탐구하세요." },
      { range: [13, 18], type: "고급 기술 활용자", advice: "최신 기술을 활용하여 투자 효율을 극대화하세요." },
    ],
    "목표 설정": [
      { range: [1, 6], type: "단기 목표 지향형", advice: "단기적인 목표를 명확히 설정하세요." },
      { range: [7, 12], type: "중기 목표 지향형", advice: "중기적인 계획을 지속적으로 점검하세요." },
      { range: [13, 18], type: "장기 목표 지향형", advice: "장기적인 성공을 목표로 계획을 세우세요." },
    ],
    "투자와 인생의 상관관계": [
      { range: [1, 6], type: "낮은 상관관계", advice: "투자가 삶에 큰 영향을 미치지 않도록 균형을 유지하세요." },
      { range: [7, 12], type: "중간 상관관계", advice: "투자와 삶의 균형을 지속적으로 유지하세요." },
      { range: [13, 18], type: "높은 상관관계", advice: "투자 성과와 삶의 질 간의 관계를 신중히 관리하세요." },
    ],
  };

  // 결과 생성 및 표시
  let resultHtml = "";
  Object.keys(scores).forEach((category) => {
    const score = scores[category];
    const typeData = personalityTypes[category]?.find(({ range }) => score >= range[0] && score <= range[1]);

    if (typeData) {
      resultHtml += `
        <div class="card mb-4 shadow-sm">
          <div class="card-body">
            <h3 class="card-title text-primary">${category}</h3>
            <p><strong>유형:</strong> ${typeData.type}</p>
            <p><strong>조언:</strong> ${typeData.advice}</p>
          </div>
        </div>`;
    } else {
      resultHtml += `
        <div class="alert alert-warning" role="alert">
          ${category}에 대한 데이터를 찾을 수 없습니다.
        </div>`;
    }
  });

  // 결과를 화면에 렌더링
  resultContainer.innerHTML = resultHtml;
});
