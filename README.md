# user-crud-demo-frontend

ReactJS CRUD Example with NextJS

The original documentation go to [next-js-10-crud-example-with-react-hook-form](https://jasonwatmore.com/post/2021/04/20/next-js-10-crud-example-with-react-hook-form)

## prepare
```
npm install
```

## build
```
npm run build
```

## run
```
npm run dev
```

## project layout
```
.
├── components                  ReactJS 파일이 위치 하며 UI 컴포넌트이다.
│   ├── users             	폴더를 기준으로 기능 단위로 관리할 수 있다.   
│   ├── Alert.jsx
│   ├── Link.jsx
│   ├── Nav.jsx
│   ├── NavLink.jsx
│   └── index.js
├── data                        App 샘플 데이터를 위치 합니다.
│   └── users.json
├── helpers                     유틸리티 클래스를 위치 합니다.
│   ├── index.js
│   └── users-repo.js
├── pages                       NextJS 의 라우팅 대상 페이지를 정의 합니다.
│   ├── api               	폴더 단위로 모든 API 앤드포인트를 정의 합니다.
│   ├── users             	폴더 단위로 페이지를 정의 합니다. (users)  
│   ├── _app.js
│   └── index.jsx
├── services                    백엔드 API 와의 모든 통신(request/reponse)을 처리 합니다. 
│   ├── alert.service.js
│   ├── index.js
│   └── user.service.js
├── styles                      CSS 스타일을 정의 합니다. 
│   └── globals.css
├── README.md
├── config.js                   apiUrl 와 같은 BASE_URI를 위한 상수를 정의 합니다. (런타임 환경에 맞게 동적 설정)
├── jsconfig.json
├── next.config.js
└── package.json
```

## Components version
- node: v16.12.0