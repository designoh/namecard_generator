# namecard_generator
[![Video Label](https://i.imgur.com/wgeHNe8.gif)](https://www.youtube.com/watch?v=hr9y4xU9VAs)

Adobe Illustrator Script for generating business card automatically <br>
**namecard_generator**는 어도비 일러스트레이터에서 사용할 수 있는 명함 생성 자동화 스크립트입니다.<br><br>


<br>

# namecard_generator 사용 방법
[![Video Label](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d3442fe4-4032-4c4c-9db9-aac8343feac0/02_use_script.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45LGXAICHX%2F20190731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190731T081449Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBstJOC%2F4TvaXGNQe5rV9ewDR4yjTd2wR46wAWgO9O3ZAiEAtN8ZlygR%2FGEHbyT3ygosFlTXDOqfQ3zDM2K9Xqg7tS0q4wMIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyNzQ1NjcxNDkzNzAiDHaiLXKTdg45%2FGBBqiq3AyCMkaAPPaydhB%2BnAXoD1LaUf%2BwVbcC73hc1sRv4Zgky4IXF5l1ZsAmCUh9qLABCMbcRY5xn%2Bdi9c0Ptd%2FxKiUJJHj%2BV9LtgW6UUO80gVOOnUn0gC%2FQqium5TJWBlVNzdFM2p2ejQgCqKZvSYj22EootfQMUOOOXCjCOtP%2Bqs2gZyNUzIgLd7jG3%2BmcJmtJXOZ8yhTxM1bQv07eQFbbleiSPIfPS8pSE6aDxjxYnMAMG3AhbRIlrxY%2FqXuEJSxtuwPGP%2FYF4idbixvXZu2%2BE6ChCX6mxdw%2F1SkObstEhdflnriQI3ueNZSZJfJ7D3U9vkAces%2BUHVEiKXptfzEd6TKWrMjRErFGrnOccFeYbsInb5LFafxwp9Mp2YBpdHVwePxscIQZx5Tmwh5jqxJ5JwaMiN8R8cm9VPJM%2FwczfUQmo0T88uhBBn7Ton7Ab7iE8o%2Bk8z6VM%2FfvQh7%2B8Tj12DZn%2Bx03MOssoo3rOSyL2pR4re6WC%2B0wTL3%2BSGgMFoLS9XP0Q34vVfDJTA5ZmhzXXfp0Mz80QdrihkwUHkIMmmFCLSOM%2Ba7odHrNKZpNyCV%2Fa762tmz5e8Z0wmeWE6gU6tAFPTNJUNxY5w8V5kNEz518%2Fp0HvY4KmwAUkBmod6aFK37sPiYeiVS4D00hCoSc62gd%2FBz0o764rnxDTfx8CTaR%2BzYGIuVKsSBLZUqtsASg5pRLsnmnWmcchmiJLhPBr%2FmnwgsrgXzgZeRwpvAuzWkpO3v4Orb92yOeojNMGv1dYZ2YjSruqQDg%2F20l89TQ19RHtnEsTo5Ag3sGoQgU1%2FQUp7i135EAZcea45%2BIICbcad5V1KPc%3D&X-Amz-Signature=b68dd235da05eccd40e805b5112ccda282cdc574be95b95297403a1712f9dfbd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2202_use_script.jpg%22)](https://www.youtube.com/watch?v=S4wzrwgM20Y)

### 1) 템플릿화한 명함 파일을 연다.
   스크립트 사용 전 간단한 사전 작업이 필요합니다. 아래 **스크립트 사용 전 필수 작업**을 참고해주세요.
### 2) **namecard_generator** 스크립트를 실행한다.
   하단의 설치 방법을 참고하여 사용 전 미리 스크립트를 설치해주세요. 
### 3) 구글 스프레드시트에서 필요한 정보를 복사하여(변수 포함) 스크립트 창에 붙여넣는다.
   데이터를 복사할 때 **반드시 변수 이름을 포함**하여 복사해야 합니다. 

<br>

스크립트가 정상적으로 실행되면 '정보가 성공적으로 입력되었습니다.'라는 얼럿이 뜨며, 'OK'를 누르면 정보 입력이 마무리됩니다. 

입력되는 텍스트 길이에 따라 디자인이 터질 수 있으니, 스크립트 실행 이후에는 각 아트보드를 확인하는 것을 권장합니다. 
이후 폰트 깨기/내보내기 등 주문을 위해 필요한 후작업을 하시면 됩니다. 


<br>

# 스크립트 사용 전 필수 작업 (템플릿화 사전 작업)

명함 제작 자동화 스크립트를 원활하게 사용하기 위해서는 기존에 디자인되어 있던 명함 파일을 템플릿화하는 사전 작업이 필요합니다.

이 작업은 **최초 1회**만 필요하며, 약 1~2분 정도 소요됩니다.
<br>

[![Video Label](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4c51b86b-fd8a-4fa3-8312-1673d7f422a3/_2019-07-28__1.34.47.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45P4XN6PWO%2F20190731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190731T081453Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIDKW5F0mDG960uY%2BbGVVB2CHDX%2FACRBjdlwnY5rZ8IuVAiEAo86N2i6x3Z7Q6jn3aIcWuyH%2BcVIZAksI8hUJfAJGyB0q4wMIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyNzQ1NjcxNDkzNzAiDHWCwlyK3Xzp8fbTdCq3A42cHT0k7A3gD6Ye4RxDV3Rd8X%2B5gNaSXHZD1XEd5aI7CzPFkO0OOnk0XD2ugmOUiI2iqW0J5bEoa0MwPkvkXwQbGjWmb5GT1QyX5i%2BICb%2FtOg5LRzKXFplFM51hs4RI1sfYvuVafVkGd3ToueEsEcEUsp9%2Bslgg0QasgNEiQueTm1HYSG%2BO5YrC31Snt5m%2BXY6JXOXN8HAoccs20GLw%2FA%2BFTB2SNxPnf057ZYbrHt%2B65%2B1CjfB6MGHMRuK22mFDI5Hrht4azA0Kdl%2BVndnSiR3quJhVLxPq1PTzoXaFV4CxnDTTFb9smhBilM8Vl1Q07ZI1VLBzP2SxPUbB2GDgd03dvka7TOt1DS3rdjSBx9OKAcUfk8uqlvK%2BQpSLS%2FMiXvCNzaNfF2kxuO8KeIuGx4U3VSWB4ivWnS5SWPRoUwRjS%2F1eP1EvFBqQkV0AUpHYbDE9h2cvYsyUULW3ctPGge1jU12mYpNXrguC%2BH1x5Z%2BdMiqAXNLZXHdWWs%2FIV%2BFN3da1zoVqJ0EvesKkzMB0FewvaJqutu3ghL1sZKercL6PtwraKuWHWUPfTV0leNrq36j3e4c%2FpXIwhPiE6gU6tAHJRLoKFc7UcXl5RMqvYiR82J9sBT%2BkEIoYnwiW7NPMIscx9wStviAJXkHdoP76EPtlCq8igH%2FkAs0poM2bxMiH3w6DxSyJRQ0j5tw%2F0MjB3Q%2FBxePPX6%2BCbSnGISA5vxNXlUyD%2BsKEAiOA1M%2FvYis%2FrPsGVRymQwhG4sTFhtENkQT8sDHt33T6PKd9RVV6q7NX5blB0nIi5vFlDq8SVqCcLCC76ZltHrKPws9lgbNhuxAG21c%3D&X-Amz-Signature=acfb257620d88d5d210da7b20084b14267b34980db7a538e4d040baccd31c6b9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22_2019-07-28__1.34.47.png%22)](https://www.youtube.com/watch?v=mzEeMqVw8q8&t)



### 1) 오브젝트 및 레이어 분리

명함에 들어가는 정보들 중 스크립트로 바꾸고 싶은 정보들만, 아래 이름에 맞게 레이어를 생성하여 각각 옮겨줍니다. (대소문자 구분) <br>


**정보 오브젝트** | **레이어 이름**
:---------: | :---------:
한글 이름 | nameKor
영어 이름 | nameEng
직무 | job
직급 | position
소속 | team
핸드폰 | mobile
전화번호 | phone
이메일 | email
팩스 | fax


로고, 시각 요소 등 바뀌지 않는 오브젝트들은 한 레이어에 따로 모으고, 다른 레이어와 헷갈리지 않게 'template', 'default' 등으로 적당히 레이어 이름을 바꿔두면 좋습니다.

### 2) 레이어 패널의 옵션에서 'Paste Remembers Layers' 체크
'Paste Remembers Layers' 항목이 설정되어 있어야 스크립트가 정상적으로 실행됩니다.

### 3) 다른 이름으로 저장하여 템플릿 파일 따로 보관


<br>

# 스크립트 설치 방법

어도비 일러스트레이터 스크립트 폴더 경로에 namecard_generator_v1.0.jsx 와 json2.js 두 파일을 다운 받는다.

**- Windows**

  `Program Files > Adobe > Adobe > Illustrator > 사전 설정 > en_US > Scripts`

**- Mac**

  `응용 프로그램 > Adobe Illustrator > Presets > en_US > Scripts`

참고) 일러스트레이터가 어떤 언어 버전으로 설치되어 있느냐에 따라 중간 폴더 이름이 `en_US`가 아닌 `en_GB`, `ko_KR` 등일 수 있습니다.

<br>

---
### 버그 제보 및 개선 문의
designoh_b@naver.com

douglascrockford 님의 json2.js 을 사용했습니다. (json2.js is owned by douglascrockford.)
https://github.com/douglascrockford/JSON-js
