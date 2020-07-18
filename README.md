# Deno
Deno에 대해서 공부해보자... (마크가 다이노같아서.. 디노 인줄 알았는데 데노 라고 하는듯?)

1. DENO는 Node 개발자가 만들었음, Node에 사용된 기술이 오래된 기술이 많아서 새로 개발

2. Node문제점

	1. 모듈이 node_module에 너무 중앙집중화되어 관리되었는데 분산관리되는게 더 낫다고함

	2. legacy API들을 지원하지않음

	3. 보안성 : 누구나 중요정보에 접근할수 있어서

3. Deno특징

	1. ES Modules 만을 유일하게 사용 
	( npm repository가 아닌 데노 자체의 Http URL을 사용해서 import )
	( ex: import { serve } from "https://deno.land/std@0.50.0/http/server.ts"; )

	2. 보안성 : 기본적으로 디스크, 네트워크 접근하려면 permission을 통해 접근이 가능
	(SandBox와 같이 작동)
	
	3. typescript 내장

	4. Top level await ( ?? 잘 모르겠으나 해봐야알듯... )

	5. 브라우져 호환성 ( fetch 내장 ) 
	( node는 node-fetch를 install 해야했지만 Deno는 내장 )

	6. require를 더이상 사용하지않고 import와 export를 사용

4. 비교 

||node|deno|
|------|---|---|
|Engine|v8|v8|
|Written In|C++ & Javascript|Rust & Typescript|
|Package Managing|npm|use URLs|
|Importing Pacakages|CommonJS syntax(ex: require)|ES Modules|
|Security|full access|permissioned access|
|TypeScript Support|not built in|built in| 		


5. 설치 

https://deno.land/

(Window PowerShell) 
iwr https://deno.land/x/install/install.ps1 -useb | iex
