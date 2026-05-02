(function () {
  const config = window.NORE_DEMO_CONFIG || {};
  const role = config.role === 'operator' ? 'operator' : 'trainer';

  const scenarios = {
    trainer: [
      {
        id: 'member-care',
        tag: 'Member Care',
        title: '회원 관리 흐름을 한 번에 봅니다.',
        lead: '트레이너가 남긴 메모가 회원 대화, 할 일, 다음 수업 준비로 이어지는 흐름입니다.',
        inputTitle: '트레이너 입력',
        input: '김민지 회원\n목표: 체지방 감량, 하체 근력 회복\n최근 신호: 식단 사진 2일 누락, 허리 불편감, 수업 예약 변경 1회\n오늘 할 일: 가볍게 안부 확인 후 다음 수업 강도 조정',
        outputTitle: 'NORE가 정리한 트레이너 작업',
        output: [
          '이탈 위험 신호는 낮음이지만 식단 기록 공백과 허리 불편감을 같이 확인합니다.',
          '다음 수업은 하체 볼륨보다 코어 안정화와 힙힌지 패턴 점검을 우선합니다.',
          '회원에게는 부담 없는 안부 메시지와 식단 기록 재개 요청을 함께 보냅니다.'
        ],
        memberTitle: '회원이 보는 화면',
        member: [
          '오늘의 대화에 트레이너 피드백이 도착합니다.',
          '허리 불편감이 있으면 바로 답장할 수 있습니다.',
          '다음 수업 전까지 할 작은 과제가 카드로 남습니다.'
        ]
      },
      {
        id: 'feedback',
        tag: 'Smart Feedback',
        title: '수업 메모를 회원 피드백으로 바꿉니다.',
        lead: '수업 직후 30초 메모만 남기면, 회원에게 보낼 말투와 체크 포인트가 정리됩니다.',
        inputTitle: '수업 메모',
        input: '오늘 스쿼트 40kg 5x5 성공. 마지막 세트에서 무릎이 안쪽으로 살짝 들어감. 호흡은 좋아짐. 다음 시간은 중량 올리기보다 템포 유지.',
        outputTitle: '생성된 피드백 예시',
        output: [
          '오늘 스쿼트 40kg 5세트 모두 잘 마무리했습니다. 특히 호흡이 지난 수업보다 안정적이었습니다.',
          '마지막 세트에서 무릎이 안쪽으로 들어가는 순간이 있어 다음 수업은 템포와 무릎 방향을 먼저 잡겠습니다.',
          '집에서는 무리한 추가 운동보다 가벼운 고관절 스트레칭만 진행해주세요.'
        ],
        memberTitle: '회원이 보는 화면',
        member: [
          '수업이 끝난 뒤 앱에서 바로 피드백을 확인합니다.',
          '잘한 점과 조심할 점이 분리되어 보입니다.',
          '다음 수업 목표가 짧은 문장으로 남습니다.'
        ]
      },
      {
        id: 'brand',
        tag: 'Personal Brand',
        title: '빈 피드 대신 트레이너의 글 초안을 만듭니다.',
        lead: '회원 관리와 수업 기록에서 나온 실제 주제로 블로그와 SNS 초안을 만듭니다.',
        inputTitle: '콘텐츠 소재',
        input: '주제: 허리 통증이 있는 회원의 스쿼트 접근\n대상: 운동 초보 직장인\n톤: 과장 없이 전문적이고 쉽게\n포함: 통증을 참지 말 것, 힙힌지, 호흡',
        outputTitle: '콘텐츠 초안 방향',
        output: [
          '제목: 허리가 불편한데 스쿼트를 해도 될까요?',
          '도입부는 통증을 참는 운동이 성실함이 아니라는 메시지로 시작합니다.',
          '본문은 힙힌지, 호흡, 가동범위 조절을 초보자 언어로 설명합니다.'
        ],
        memberTitle: '회원이 보는 화면',
        member: [
          '회원은 트레이너가 어떤 기준으로 운동을 보는지 이해합니다.',
          '검색에서 발견된 글이 상담 전 신뢰를 만듭니다.',
          '센터와 트레이너의 전문성이 같은 톤으로 쌓입니다.'
        ]
      },
      {
        id: 'kpi',
        tag: 'My KPI',
        title: '트레이너 본인의 흐름을 숫자로 봅니다.',
        lead: '평가표가 아니라 다음 달 수업과 회원 유지에 필요한 신호만 추립니다.',
        inputTitle: '이번 달 신호',
        input: '완료 수업 118회, 재등록 예정 9명, 식단 피드백 대기 4건, 신규 배정 6명, 만족도 4.7',
        outputTitle: 'KPI 요약',
        output: [
          '수업 완료와 만족도는 안정적입니다. 다음 주 우선순위는 재등록 예정 9명입니다.',
          '식단 피드백 대기 4건은 회원 대화에서 먼저 처리하면 이탈 신호를 줄일 수 있습니다.',
          '신규 배정 회원은 첫 2주 안에 목표와 통증 이력을 고정해두는 것이 좋습니다.'
        ],
        memberTitle: '회원이 보는 화면',
        member: [
          '회원별 대화와 피드백이 누락되지 않습니다.',
          '트레이너가 바쁜 날에도 다음 액션이 남습니다.',
          '관리 품질이 트레이너 개인 기억에만 의존하지 않습니다.'
        ]
      }
    ],
    operator: [
      {
        id: 'ai-bot',
        tag: 'Member Care',
        title: '센터 밖 질문도 운영 흐름에 남깁니다.',
        lead: '회원 질문, 예약 변경, 동기부여 메시지가 흩어지지 않고 담당자 액션으로 이어집니다.',
        inputTitle: '오늘 들어온 신호',
        input: '회원 문의 18건\n예약 변경 5건\n운동 동기 저하 메시지 3건\n담당 트레이너 미확인 2건',
        outputTitle: '운영 요약',
        output: [
          '담당 트레이너 미확인 2건은 오늘 마감 전 확인이 필요합니다.',
          '동기 저하 메시지 3건은 이탈 위험 후보로 묶어 내일 안부 연락을 추천합니다.',
          '반복 예약 변경 회원은 스케줄 고정 상담 대상으로 분류합니다.'
        ],
        memberTitle: '현장에 남는 변화',
        member: [
          '회원 응답 누락이 줄어듭니다.',
          '트레이너가 확인해야 할 메시지만 남습니다.',
          '대표는 전체 응대 병목을 한 화면에서 봅니다.'
        ]
      },
      {
        id: 'revenue',
        tag: 'Revenue AI',
        title: '매출 숫자를 운영 판단으로 바꿉니다.',
        lead: '지점별 매출과 신규/재등록 흐름을 묶어 이번 주 액션을 뽑습니다.',
        inputTitle: '이번 달 매출 신호',
        input: '강남점 매출 4,820만원, 전월 대비 +8%\n신규 매출 +18%, 재등록 -6%\n상담 전환율 31%, 만료 예정 회원 24명',
        outputTitle: '대표 요약',
        output: [
          '신규 유입은 좋지만 재등록이 빠지고 있어 만료 예정 24명 대응이 우선입니다.',
          '상담 전환율 31%는 안정권이나, 재등록 상담 스크립트 점검이 필요합니다.',
          '이번 주 목표는 신규 광고 확대보다 기존 회원 만료 대응입니다.'
        ],
        memberTitle: '현장에 남는 변화',
        member: [
          '매출표를 해석하는 시간이 줄어듭니다.',
          '지점장과 트레이너에게 같은 우선순위가 공유됩니다.',
          '숫자가 보고서가 아니라 오늘 할 일로 바뀝니다.'
        ]
      },
      {
        id: 'trainer-kpi',
        tag: 'Trainer KPI',
        title: '트레이너 성과를 성장 신호로 읽습니다.',
        lead: '회원 유지, 수업 완료, 피드백, 재등록 흐름을 함께 보며 다음 코칭 포인트를 찾습니다.',
        inputTitle: '트레이너별 신호',
        input: 'A 트레이너: 수업 완료 142회, 재등록률 71%, 피드백 응답 빠름\nB 트레이너: 수업 완료 96회, 신규 배정 많음, 식단 피드백 지연\nC 트레이너: 만족도 4.9, 매출 전환 낮음',
        outputTitle: '관리자 코칭 포인트',
        output: [
          'A 트레이너는 재등록 상담 사례를 팀에 공유할 후보입니다.',
          'B 트레이너는 신규 회원 온보딩이 많아 피드백 자동화 템플릿 적용이 필요합니다.',
          'C 트레이너는 만족도는 높으므로 상담 제안 타이밍을 점검합니다.'
        ],
        memberTitle: '현장에 남는 변화',
        member: [
          '평가가 아니라 지원할 포인트가 먼저 보입니다.',
          '트레이너별 강점과 병목이 분리됩니다.',
          '회의가 감이 아니라 같은 지표로 시작됩니다.'
        ]
      },
      {
        id: 'operations',
        tag: 'Operations',
        title: '반복 운영을 놓치지 않게 묶습니다.',
        lead: '예약 신청, 입출입, 급여 정산, 이탈 위험을 하나의 운영 큐로 정리합니다.',
        inputTitle: '오늘 운영 큐',
        input: '예약 승인 대기 7건\n입실 후 퇴실 미처리 3건\n급여 정산 확인 2명\n이탈 위험 회원 6명',
        outputTitle: '오늘 처리 순서',
        output: [
          '예약 승인 대기 7건을 먼저 처리해 회원 불확실성을 줄입니다.',
          '퇴실 미처리 3건은 지점 운영 기록 오류 가능성이 있어 마감 전 정리합니다.',
          '이탈 위험 6명은 담당 트레이너별 연락 템플릿을 생성합니다.'
        ],
        memberTitle: '현장에 남는 변화',
        member: [
          '마감 전에 놓친 운영 항목이 보입니다.',
          '센터 운영 기준이 지점마다 달라지지 않습니다.',
          '대표가 직접 챙겨야 하는 반복 확인이 줄어듭니다.'
        ]
      },
      {
        id: 'trainer-marketing',
        tag: 'Marketing',
        title: '트레이너의 현장 경험을 검색 자산으로 만듭니다.',
        lead: '센터 안의 수업 기록과 상담 질문을 블로그, SNS, 검색 대응 소재로 바꿉니다.',
        inputTitle: '이번 주 콘텐츠 소재',
        input: '상담 질문: 체형교정과 다이어트를 같이 해도 되나요?\n회원 사례: 라운드숄더와 체중 감량을 병행\n센터 지역: 강남',
        outputTitle: '마케팅 초안 방향',
        output: [
          '검색형 제목은 강남 체형교정과 다이어트 병행 기준으로 잡습니다.',
          '본문은 통증 관리, 자세 평가, 운동 강도 조절 순서로 구성합니다.',
          '센터 홍보보다 트레이너의 판단 기준을 보여주는 글로 신뢰를 만듭니다.'
        ],
        memberTitle: '현장에 남는 변화',
        member: [
          '트레이너 개인 브랜딩이 센터 검색 유입으로 이어집니다.',
          '광고 문구보다 실제 상담 질문에서 콘텐츠가 나옵니다.',
          '지점별 강점이 반복 가능한 자산으로 쌓입니다.'
        ]
      }
    ]
  };

  const $ = (selector) => document.querySelector(selector);
  const list = $('#scenario-list');
  const random = $('#random-scenario');
  const sample = $('#sample-input');
  const simulate = $('#simulate-demo');
  const title = $('#scenario-title');
  const tag = $('#scenario-tag');
  const lead = $('#scenario-lead');
  const inputTitle = $('#input-title');
  const outputTitle = $('#output-title');
  const output = $('#scenario-output');
  const memberTitle = $('#member-title');
  const memberFlow = $('#member-flow');
  const status = $('#demo-status');

  if (!list || !sample || !title || !output || !memberFlow) return;

  const scenarioList = scenarios[role];
  const params = new URLSearchParams(window.location.search);
  let active = scenarioList.find((item) => item.id === params.get('scenario')) || scenarioList[0];

  function renderButtons() {
    list.innerHTML = scenarioList.map((item) => `
      <button class="scenario-btn${item.id === active.id ? ' active' : ''}" type="button" data-scenario="${item.id}">
        <span>${item.tag}</span>${item.title}
      </button>
    `).join('');
  }

  function renderScenario(item) {
    active = item;
    tag.textContent = item.tag;
    title.textContent = item.title;
    lead.textContent = item.lead;
    inputTitle.textContent = item.inputTitle;
    sample.value = item.input;
    outputTitle.textContent = item.outputTitle;
    memberTitle.textContent = item.memberTitle;
    output.innerHTML = `
      <div class="output-card">
        <strong>${item.outputTitle}</strong>
        <ul>${item.output.map((line) => `<li>${line}</li>`).join('')}</ul>
      </div>
    `;
    memberFlow.innerHTML = item.member.map((line, index) => `
      <div class="flow-row"><b>${index + 1}</b><span>${line}</span></div>
    `).join('');
    status.textContent = '정적 샘플입니다. 입력 내용은 서버로 전송되지 않습니다.';
    renderButtons();
  }

  function simulateOutput() {
    const firstLine = sample.value.trim().split('\n').find(Boolean) || '입력한 내용';
    const baseLines = active.output.slice(0, 2);
    const simulatedLine = `입력값 "${firstLine.slice(0, 34)}${firstLine.length > 34 ? '...' : ''}" 기준으로 우선 액션을 다시 정리했습니다.`;
    output.innerHTML = `
      <div class="output-card">
        <strong>${active.outputTitle}</strong>
        <ul>${[simulatedLine, ...baseLines].map((line) => `<li>${line}</li>`).join('')}</ul>
      </div>
    `;
    status.textContent = '샘플 출력만 갱신했습니다. 네트워크 요청은 없습니다.';
  }

  list.addEventListener('click', (event) => {
    const button = event.target.closest('[data-scenario]');
    if (!button) return;
    const next = scenarioList.find((item) => item.id === button.dataset.scenario);
    if (next) renderScenario(next);
  });

  random.addEventListener('click', () => {
    const next = scenarioList[Math.floor(Math.random() * scenarioList.length)];
    renderScenario(next);
  });

  simulate.addEventListener('click', simulateOutput);
  renderScenario(active);
})();
