import styled, {injectGlobal} from "styled-components";
import "nprogress/nprogress.css";

injectGlobal`
	*{
		box-sizing: border-box;
	}
	
	html, body, #root{
		width: 100%;
		min-height: 100%;
		height: 100%;
	}
`;
