# namecard_generator
[![Video Label](https://media.giphy.com/media/UthZHv5g1lmlmrY8GG/giphy.gif)](https://www.youtube.com/watch?v=hr9y4xU9VAs)


Adobe Illustrator Script for generating namecard automatically <br>
**namecard_generator**는 어도비 일러스트레이터에서 사용할 수 있는 명함 생성 자동화 스크립트입니다.<br><br>


<br>

# namecard_generator 사용 방법
[![Video Label](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d3442fe4-4032-4c4c-9db9-aac8343feac0/02_use_script.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45HXJFXPW7%2F20190727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190727T164042Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi2PdEMOruPBkiQnKZS4y92Ll6rYxiYyyJjsretMcv6QIhANuRxzGAFPfB4inC3YJ4j2HPhK4kKGbNYhUn6H4dFe8UKtoDCEUQABoMMjc0NTY3MTQ5MzcwIgxIpGpg%2FoyCv4nYCC8qtwMBRT%2FGYqWit6OMoyq%2BcdSlMKEbn2AhUYASwHBmEOf4oO6dlEPt0DlO2cl21hlMt17MkLH45xBHo%2BalwvRlADGxSJISzrdAabPrOM7UOrvyzRJgZQTB5%2BIqhvZz1AKbksjlBlICw5tiEVoPEgGdL3%2Fv9scYySgpWhN6zC4j3kUsXR8KxuqbsANIQkNhS48aFv55aRjBjblABrnBa0I%2Bym6wnI%2FGdpi377PaS0L1MTRRk9I5qranofujmMJOjJiSpmbJmTsUtSakPU0NF1UuMAVuUV7fnVwbiSQVf3v%2BYq4JGeGxbWDiF2tcjKRP2Z87840ZQJo31bJVD9wnK91ZCSb1w7s4Bu0824qARpXQgEVm0co%2FJ0tf058h0jZOJnGGLaV7CLeLJ8xtWqiQfe4QXYIOdNONqwMHHMaLvw25xuftdf%2B1y%2BrmyNWk1%2BBVyPUomxl80Z3OdklzTT7UrqDoekvLNA5tixDfhjmK27739tTQdFLLi%2BHu4VZcpGtl6FEMMO%2BplUtWKxeX%2FOkBuTeOTTgy7GulnHQq8hlS%2B6JD07FwvkaxeQ2nia3pax2UGN4P2Y9IyZoOp%2BFXMJ738OkFOrMBjsSG8bsoY3iLKGdP6KVm6UVdKk0n6twFKuImDf7RySilRDNNIkVui2lxlnyiqKa7z6Gu69C5hsJxZuSFEiIn03RCAW%2BdlhiYNfjwuXlOD67BI3TYOQ4VnYOgajztsT7SzGfCknrw5uxvFUVa3GTR%2Ftr7odkarAgTH4uC%2FFYhU6LYsmolMgGdYNrjfcYDzDY%2BcYowdYSF1TWKB%2B1pvxuzXPh2%2FMUe9gNZ8EZhc9T%2FilBLhA0%3D&X-Amz-Signature=2b5126b1f457f38675e88a15af93c1816e936ca0449122abecd1959a0cc76aba&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2202_use_script.jpg%22)](https://www.youtube.com/watch?v=S4wzrwgM20Y)

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

[![Video Label](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bf25afd7-25e1-4a1c-822c-591b638bff26/01_make_template.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45P3JUK57K%2F20190727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190727T164104Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FUDK5xBv4cHx18fNtcCKqtByJpxZn0lZ2ZBY%2FZncyaAiAAnbUgrxW%2BVjKXArqaeYhtm2puH%2BRv9E6OhbRtIWdetiraAwhFEAAaDDI3NDU2NzE0OTM3MCIMNWYB9z6UHnccWcWLKrcDYzUPv49xFF1D%2FqVBOT1zvVz67bTxYuXgQShspebKS8h%2BWlZaD2Ay45onZL9iJ%2F1Ia6vv4bAhQUNtbn1NiSW9r2wrAw%2FLiuEk9ouEivPzJxK0uhSl8KVVIdufbuEwscP81lvLCGC%2BLNN81RTrKxenvUo5%2BumcyGRLlicJZRnA%2BxsIV7Z782XOqkf2bE53ESEXWrRJqRERb8VsxbZqcKxwhzptBwmKKcBp4U4xGEl8FNHwY7SrMyo0ZhDSKJEPRxMYFDMNHNByAmARVH0OjunD1Q8GYpmsVx%2B2HYN5Q3MkPAs5b9pEOiu6RvaQrE0ywpJ1drjKYmMNUt%2F7IuAF1TeMYssi3aXa162OGnZnh%2Bh5wWRi12J1TNNK0s14YY3wtGHIN%2FImYE6Dw3Pb3Xgjrnc%2Ba5O3VacPClrhtJ%2F9w%2BgTz5oQFCFDfhJ01Kfs1bpuHaOJ8m9UBLg2jlzRvp4Vgof2NL%2FBLg3bfLotD7g1%2BqxLcyt9P68jJ7gFv02VwDTORpPFcJZ69IVuTqBbT6%2Bo3k0DFfOzGnGF%2FywaK4vcY7oZH8i6fQyD3TVLDQVMN4o6nYIBHeTiD5d7PjDc8%2FDpBTq1AQNosP1x%2FUe8Q4xppbR2AQLhRzxnKDy%2F68Mz42tj2z2inGoLSvKoos95ZBTahVOe4p53mD68QqGp0GMJkD6ndQwDfJ6tkR9f4MQbAdub1MrhqiWSjLpg3NcWpQYwPQMS63r670zOtIj%2Bq7%2FGcLDSLxoPYh0WA7xYXnUZDcuXFFSYbE3Jp64hYf6%2Fs3JaMta48%2FqOn1CZzTDzgNm7P39uXFwIO9ORgWhB2PEXMcjB0GDG2AG0mkM%3D&X-Amz-Signature=2de1c7eb9038fafa0c7448fa99479bec033bcffd80af789958267b791bca3f4d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2201_make_template.jpg%22)](https://www.youtube.com/watch?v=mzEeMqVw8q8&t)



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
