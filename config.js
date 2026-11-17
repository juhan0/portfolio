// juhan0 portfolio — edit content here.
const SITE = {
 theme: {palette:'slate',style:'soft',defaultMode:'auto',font:'system'},
 guide:{show:false}, community:{show:false},
 site:{url:'https://juhan0.github.io/portfolio/',title:'juhan0 | 프로젝트 포트폴리오',description:'juhan0의 개인 프로젝트와 학습 기록을 소개하는 포트폴리오입니다.',ogImage:'assets/img/og-image.svg',locale:'ko'},
 nav:{brand:'juhan0',showThemeToggle:true,showDotRail:true,commandPalette:true},
 hero:{statusText:'포트폴리오 준비 중',statusOpen:false,eyebrow:'PROJECT PORTFOLIO',name:'juhan0',nameHighlight:'juhan0',tagline:'프로젝트와 학습의 과정을 기록하는 공간입니다. 프로젝트 소개와 작업 기록을 차근차근 채워 나갈 예정입니다.',typewriter:false,primaryCta:{label:'프로젝트 보기',href:'#projects'},secondaryCta:{label:'소개 보기',href:'#about'},cv:{show:false},glanceTitle:'둘러보기',glance:[{icon:'user',label:'소개',value:'이 공간에 대해',href:'#about'},{icon:'folder',label:'프로젝트',value:'작업 기록',href:'#projects'}]},
 sections:[{id:'about',nav:'소개',show:true},{id:'projects',nav:'프로젝트',show:true},{id:'contact',nav:'GitHub',show:true}],
 about:{intro:'소개를 준비하고 있습니다',photo:'assets/img/portrait.svg',photoAlt:'기본 프로필 일러스트',paragraphs:['안녕하세요. juhan0의 프로젝트 포트폴리오입니다.','직접 진행한 프로젝트와 학습 기록을 정리할 예정입니다. 자세한 자기소개와 관심 분야는 추후 추가됩니다.'],interests:[],quickFacts:[]},
 projects:{filters:false,intro:'프로젝트 상세 내용을 준비하고 있습니다.',items:[{featured:true,title:'프로젝트 준비 중',description:'이곳에 프로젝트의 목표, 사용 기술, 맡은 역할과 결과를 소개할 예정입니다.',image:'',tags:['준비 중'],links:[]}]},
 contact:{html:'<div class="card"><h3>GitHub에서 더 보기</h3><p>공개 프로필과 저장소를 확인할 수 있습니다.</p><a class="btn btn-primary" href="https://github.com/juhan0">GitHub 방문하기</a></div>',intro:'공개 활동과 저장소',heading:'GitHub에서 더 보기',text:'아래 GitHub 링크에서 공개 프로필과 저장소를 확인할 수 있습니다.',email:'',emailButtonLabel:'이메일',form:false,formAction:''},
 footer:{tagline:'방문해 주셔서 감사합니다.',repo:{label:'포트폴리오 소스 보기',url:'https://github.com/juhan0/portfolio'},showCredit:true},
 social:[{icon:'github',label:'GitHub',url:'https://github.com/juhan0'}]
};
window.SITE = SITE;
