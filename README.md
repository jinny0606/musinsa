# 무신사 과제

## 구성요소
* [Node.js 14.x](https://nodejs.org/ko/)
* [Webpack 5.x](https://webpack.kr/concepts/)
* [Gulp 4.0](https://www.npmjs.com/package/gulp)
* [Sass](https://www.npmjs.com/package/node-sass)


## Installation

```c
$ git clone
$ npm install

```


## Build 
/src/ 폴더의 전체파일을 /dist 디렉토리에 배포
```javascript
$ npm run build
```

## SVG
- svg 이미지 사용시 파일을 폴더에 추가하고 gulp 실행
- **`/style/@sprites/_sass_inline-svg-data.scss`** 파일에 데이터 생성
```javascript
$ gulp build
```

## Directory  
* ### style
  - 스타일 관련 파일을 포함하는 디렉토리
  - **`/@abstracts`** 
  - **`/@commponents`** 
  - **`/@layout`** 
  - **`/@page`** 
  - **`/@commponents`** 
    
* ### svg
  - 이미지 파일을 포함하는 디렉토리 
    
* ### js
  - 스크립트 파일을 포함하는 디렉토리
  
* ### static
  - json 파일을 포함하는 디렉토리
  
***
