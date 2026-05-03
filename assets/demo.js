(function () {
  const config = window.NORE_DEMO_CONFIG || {};
  const role = config.role === 'operator' ? 'operator' : 'trainer';

  const scenarios = {
    trainer: [
      {
        id: 'member-care',
        tag: 'AI Chat',
        title: '회원 채팅을 관리 흐름으로 바꿉니다.',
        lead: '실제 앱의 회원관리 운영 대화처럼 회원 답장, @노어 초안, 최종 전송, 다음 할 일이 한 흐름에 남습니다.',
        inputTitle: '회원 상태 신호',
        input: '김민지 · 잔여 8회 · 5월 18일 만료\n오늘 이 회원은:\n- 식단 피드백 대기 있음\n- 이번 주 회원 전송 기록 없음\n- 허리 불편감 메모 있음\n\n트레이너 입력:\n@노어 민지님에게 오늘 하체 수업 전 안부와 식단 기록 재개 메시지 초안 만들어줘',
        outputTitle: '모바일 회원관리 운영 대화',
        outputLabel: '운영 포인트',
        output: [
          '@노어 입력은 회원에게 바로 가지 않고 AI 초안으로 남습니다.',
          '트레이너가 확인한 문장만 회원 홈으로 전송됩니다.',
          '운동 기록하기, 영양 목표 같은 액션도 같은 대화에 흔적으로 남습니다.'
        ],
        chatMessages: [
          {
            type: 'system',
            label: 'NORE',
            text: '오늘 이 회원은:\n- 식단 피드백 대기 있음\n- 허리 불편감 메모 있음\n- 잔여 8회 · 5월 18일 만료'
          },
          {
            type: 'member',
            label: '회원',
            text: '선생님 오늘 허리가 조금 뻐근한데 하체 운동해도 될까요? 식단도 어제 못 올렸어요.'
          },
          {
            type: 'trainer',
            label: '트레이너',
            text: '@노어 민지님에게 안부 확인하고 오늘 수업 강도 조절한다고 답장 초안 만들어줘'
          },
          {
            type: 'ai',
            label: 'NORE',
            text: 'NORE AI 초안\n민지님, 허리 뻐근함이 있으면 오늘은 강도를 올리기보다 움직임부터 확인해볼게요. 식단 기록은 오늘 저녁부터 다시 이어가면 충분합니다. 오실 때 불편한 동작이 있었는지만 알려주세요.'
          },
          {
            type: 'sent',
            label: '회원 전송됨',
            text: '민지님, 오늘은 무리해서 강도 올리지 않고 움직임부터 확인해볼게요. 식단 기록은 저녁부터 다시 이어가면 충분합니다.'
          }
        ],
        memberTitle: '회원 NORE 화면',
        member: [
          '회원 홈에 트레이너 메시지 도착 알림이 뜹니다.',
          '회원은 허리 상태를 바로 답장하고 다음 수업 전 과제를 확인합니다.',
          '트레이너에게는 전송 기록과 할 일이 주간 운영 대화에 남습니다.'
        ]
      },
      {
        id: 'brand',
        tag: 'Personal Brand',
        title: '기존 콘텐츠가 트레이너의 브랜딩 기준이 됩니다.',
        lead: '블로그와 인스타 링크를 먼저 읽고, 말투·강점·지역 맥락을 압축한 뒤 감정 설계와 블로그 초안으로 이어집니다.',
        inputTitle: '브랜딩 링크와 에피소드',
        input: '네이버 블로그: https://blog.naver.com/minji-fit-note\n인스타그램: @minji_fit.note\n주제: 허리 통증이 있는 직장인의 스쿼트 접근\n현장 에피소드: 회원이 "운동을 쉬어야 하나요?"라고 물음\n목표: 상담 전 신뢰를 만드는 블로그 초안',
        outputTitle: 'AI 블로그 작성 흐름',
        outputLabel: '작성 기준',
        output: [
          '블로그와 인스타에서 말투, 전문 영역, 반복 키워드를 먼저 요약합니다.',
          '감정 설계에서 독자가 느껴야 할 감정, 중심 장면, 빼야 할 소재를 분리합니다.',
          '본문은 현장 사례, 판단 기준, 상담 CTA가 있는 블로그 초안으로 생성됩니다.'
        ],
        brandPreview: {
          sources: [
            { label: 'BLOG', value: '통증관리 · 힙힌지 · 직장인 스쿼트', status: '요약 저장됨' },
            { label: 'INSTAGRAM', value: '과장 없는 설명 · 수업 전 안심시키는 톤', status: '수동 보조 입력' }
          ],
          emotion: {
            feeling: '이 트레이너는 통증을 무리로 밀어붙이지 않는다',
            scene: '회원이 스쿼트 전 허리를 만지며 불안해하던 장면',
            filter: '무리한 비포애프터, 치료처럼 보이는 표현'
          },
          draft: {
            title: '# 허리가 불편한데 스쿼트를 해도 될까요?',
            lines: [
              '도입: "운동을 쉬어야 하나요?"라고 묻는 직장인의 불안에서 시작',
              '전개: 힙힌지, 호흡, 가동범위 조절을 초보자 언어로 설명',
              '마무리: 체형 분석 30분 상담으로 부담 없이 연결'
            ],
            tags: '강남PT, 허리통증운동, 스쿼트자세, 힙힌지, 체형교정'
          }
        },
        memberTitle: '검색과 상담으로 이어지는 화면',
        member: [
          '상담 전 회원은 트레이너의 판단 기준을 검색에서 먼저 확인합니다.',
          '센터 홍보보다 실제 수업 장면과 말투가 브랜드 자산으로 쌓입니다.',
          '블로그, SNS, 상담 문구가 같은 톤으로 이어집니다.'
        ]
      },
      {
        id: 'feedback',
        tag: 'Smart Feedback',
        title: '수업 메모가 회원 피드백으로 정돈됩니다.',
        lead: '수업 직후 남긴 메모나 음성 원문을 운동내용, 자세피드백, 다음목표 순서로 정리해 회원에게 보낼 문장으로 만듭니다.',
        inputTitle: '수업 메모',
        input: '회원: 김민지\n음성 원문: 오늘 스쿼트 40kg 5세트 했고 마지막 세트에서 무릎이 안쪽으로 들어왔어요. 허리 뻐근함은 없었고 호흡은 좋아졌습니다. 다음 시간은 중량보다 템포 유지로 갈게요.',
        outputTitle: 'NoreAI 운동 피드백',
        outputLabel: '전송 전 확인',
        output: [
          '수치와 운동명은 보존하고 filler를 제거해 회원이 읽기 쉬운 문장으로 바꿉니다.',
          '통증/부상 신호는 주의사항으로 반드시 남기고 의학적 진단처럼 쓰지 않습니다.',
          '회원에게 전송하면 홈과 운동 기록 흐름에 피드백 도착 알림이 남습니다.'
        ],
        feedbackPreview: {
          raw: '스쿼트 40kg 5x5. 마지막 세트 무릎 안쪽. 허리 통증 없음. 다음은 템포 유지.',
          sections: [
            { label: '오늘의 운동 요약', text: '스쿼트 40kg 5세트를 안정적으로 마무리했습니다.' },
            { label: '잘한 점', text: '호흡이 지난 수업보다 안정적이었고 허리 불편감 없이 진행했습니다.' },
            { label: '개선 포인트', text: '마지막 세트에서 무릎이 안쪽으로 들어오는 순간이 있어 다음 수업에서 무릎 방향을 먼저 확인합니다.' },
            { label: '다음 수업 방향', text: '중량을 올리기보다 3초 하강 템포와 고관절 접기 패턴을 유지합니다.' }
          ],
          notice: '회원 앱 알림 · 운동 피드백이 도착했어요'
        },
        memberTitle: '회원이 보는 화면',
        member: [
          '수업이 끝난 뒤 앱에서 피드백 도착 알림을 확인합니다.',
          '잘한 점과 조심할 점이 분리되어 보입니다.',
          '다음 수업 목표가 운동 기록과 함께 남습니다.'
        ]
      },
      {
        id: 'kpi',
        tag: 'My KPI',
        title: '내 KPI를 다음 액션으로 읽습니다.',
        lead: '진행 세션, 판매소화율, 재등록률, 만족도, 이탈 위험 회원을 한 화면에서 보고 이번 주 우선순위를 정합니다.',
        inputTitle: '이번 달 신호',
        input: '5월 현재\nPT 매출 1,240만원 / 진행 세션 118회\n판매소화율 92% / 재등록률 38%\n만족도 4.8 / 이탈 위험 내 회원 3명\n식단 피드백 대기 4건',
        outputTitle: '내 KPI 종합',
        outputLabel: '이번 주 우선순위',
        output: [
          '수업 완료와 만족도는 안정적이지만 재등록 상담 대상 3명을 먼저 확인합니다.',
          '식단 피드백 대기 4건은 회원관리 대화에서 처리해 이탈 신호를 줄입니다.',
          '진행 세션이 높은 주에는 신규 배정보다 기존 회원 전송 기록 누락을 먼저 봅니다.'
        ],
        kpiPreview: {
          metrics: [
            { label: 'PT 매출', value: '1,240만', note: '+8%' },
            { label: '판매소화율', value: '92%', note: '건강' },
            { label: '재등록률', value: '38%', note: '주의' },
            { label: '만족도', value: '4.8', note: '안정' }
          ],
          risks: [
            '박서연 · 잔여 3회 · 재등록 상담',
            '이준호 · 7일 미방문 · 안부 연락',
            '김민지 · 식단 피드백 대기'
          ],
          trend: ['3월 31%', '4월 35%', '5월 38%'],
          action: '오늘 할 일: 잔여 5회 이하 회원 3명에게 상담 메시지 보내기'
        },
        memberTitle: '트레이너에게 남는 다음 액션',
        member: [
          '숫자가 평가표가 아니라 오늘 처리할 회원 목록으로 바뀝니다.',
          '재등록률, 소화율, 만족도를 따로 보지 않고 회원 유지 신호로 읽습니다.',
          '이탈 위험 회원과 피드백 대기 건이 회원관리 대화로 이어집니다.'
        ],
      }
    ],
    operator: [
      {
        id: 'ai-bot',
        tag: 'Member Care',
        title: '센터 밖 질문도 운영 큐에 남깁니다.',
        lead: '회원 질문, 예약 변경, 동기 저하 메시지가 채팅방에 흩어지지 않고 담당자 액션으로 이어집니다.',
        inputTitle: '오늘 들어온 신호',
        input: '회원 문의 18건\n예약 변경 5건\n운동 동기 저하 메시지 3건\n담당 트레이너 미확인 2건',
        outputTitle: 'NORE가 정리한 운영 판단',
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
        title: '매출 숫자를 이번 주 운영 판단으로 바꿉니다.',
        lead: '지점별 매출, 신규 유입, 재등록 흐름을 함께 읽어 광고보다 먼저 챙길 액션을 분리합니다.',
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
        title: '트레이너 KPI를 지원할 신호로 읽습니다.',
        lead: '회원 유지, 수업 완료, 피드백, 재등록 흐름을 함께 보며 평가보다 먼저 도와야 할 병목을 찾습니다.',
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
        title: '반복 운영을 하나의 마감 큐로 묶습니다.',
        lead: '예약 승인, 입출입, 급여 정산, 이탈 위험을 오늘 끝내야 할 순서로 정리합니다.',
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
        title: '트레이너 경험을 센터의 검색 자산으로 만듭니다.',
        lead: '센터 안의 수업 기록과 상담 질문을 블로그, SNS, 지역 검색 대응 소재로 바꿉니다.',
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

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));

  function renderChatPreview(item) {
    if (!item.chatMessages) return '';
    return `
      <div class="chat-demo" aria-label="회원관리 운영 대화 샘플">
        ${item.chatMessages.map((message) => `
          <div class="chat-line ${message.type}">
            <span class="chat-meta">${escapeHtml(message.label)}</span>
            <div class="chat-bubble">${escapeHtml(message.text).replace(/\n/g, '<br>')}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderBrandPreview(item) {
    const data = item.brandPreview;
    if (!data) return '';
    return `
      <div class="scenario-preview brand-preview" aria-label="브랜딩 작성 흐름 샘플">
        <div class="preview-mini-grid">
          ${data.sources.map((source) => `
            <div class="preview-block">
              <span class="preview-kicker">${escapeHtml(source.label)}</span>
              <strong>${escapeHtml(source.value)}</strong>
              <small>${escapeHtml(source.status)}</small>
            </div>
          `).join('')}
        </div>
        <div class="preview-block accent">
          <span class="preview-kicker">Emotion Design</span>
          <p><b>감정</b>${escapeHtml(data.emotion.feeling)}</p>
          <p><b>장면</b>${escapeHtml(data.emotion.scene)}</p>
          <p><b>제외</b>${escapeHtml(data.emotion.filter)}</p>
        </div>
        <div class="preview-block draft">
          <span class="preview-kicker">Blog Draft</span>
          <strong>${escapeHtml(data.draft.title)}</strong>
          <ul>${data.draft.lines.map((line) => `<li>${escapeHtml(line)}</li>`).join('')}</ul>
          <small>${escapeHtml(data.draft.tags)}</small>
        </div>
      </div>
    `;
  }

  function renderFeedbackPreview(item) {
    const data = item.feedbackPreview;
    if (!data) return '';
    return `
      <div class="scenario-preview feedback-preview" aria-label="운동 피드백 생성 샘플">
        <div class="preview-block muted">
          <span class="preview-kicker">Raw Memo</span>
          <strong>${escapeHtml(data.raw)}</strong>
        </div>
        <div class="feedback-sections">
          ${data.sections.map((section) => `
            <div class="feedback-section">
              <span>${escapeHtml(section.label)}</span>
              <p>${escapeHtml(section.text)}</p>
            </div>
          `).join('')}
        </div>
        <div class="preview-notice">${escapeHtml(data.notice)}</div>
      </div>
    `;
  }

  function renderKpiPreview(item) {
    const data = item.kpiPreview;
    if (!data) return '';
    return `
      <div class="scenario-preview kpi-preview" aria-label="트레이너 KPI 샘플">
        <div class="metric-grid">
          ${data.metrics.map((metric) => `
            <div class="metric-card">
              <span>${escapeHtml(metric.label)}</span>
              <strong>${escapeHtml(metric.value)}</strong>
              <small>${escapeHtml(metric.note)}</small>
            </div>
          `).join('')}
        </div>
        <div class="preview-mini-grid">
          <div class="preview-block">
            <span class="preview-kicker">At-risk Members</span>
            <ul>${data.risks.map((risk) => `<li>${escapeHtml(risk)}</li>`).join('')}</ul>
          </div>
          <div class="preview-block accent">
            <span class="preview-kicker">Re-registration Trend</span>
            <div class="trend-row">${data.trend.map((point) => `<span>${escapeHtml(point)}</span>`).join('')}</div>
            <strong>${escapeHtml(data.action)}</strong>
          </div>
        </div>
      </div>
    `;
  }

  function renderScenarioPreview(item) {
    return [
      renderChatPreview(item),
      renderBrandPreview(item),
      renderFeedbackPreview(item),
      renderKpiPreview(item)
    ].join('');
  }

  function renderOutput(item, lines = item.output) {
    output.innerHTML = `
      ${renderScenarioPreview(item)}
      <div class="output-card">
        <strong>${escapeHtml(item.outputLabel || '우선 액션')}</strong>
        <ul>${lines.map((line) => `<li>${escapeHtml(line)}</li>`).join('')}</ul>
      </div>
    `;
  }

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
    renderOutput(item);
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
    renderOutput(active, [simulatedLine, ...baseLines]);
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
