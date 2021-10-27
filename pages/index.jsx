import { Link } from 'components';
import {Component} from "react";

class BenchmarkTable extends Component {
    render() {
        return(
            <table border={1} data-ke-align="alignLeft" data-ke-style="style4">
                <tbody>
                <tr style={{height: '20px'}}>
                    <td style={{width: '25%', height: '20px', textAlign: 'center'}}>특징</td>
                    <td style={{width: '25%', height: '20px', textAlign: 'center'}}><span style={{color: '#ee2323'}}><b>Angular</b></span></td>
                    <td style={{width: '25%', height: '20px', textAlign: 'center'}}><span style={{color: '#006dd7'}}><b>React</b></span></td>
                    <td style={{width: '25%', height: '20px', textAlign: 'center'}}><span style={{color: '#009a87'}}><b>Vue</b></span></td>
                </tr>
                <tr style={{height: '25px'}}>
                    <td style={{width: '25%', height: '25px', textAlign: 'center'}}>UI/DOM 조작</td>
                    <td style={{width: '25%', height: '25px', textAlign: 'center'}}>✅</td>
                    <td style={{width: '25%', height: '25px', textAlign: 'center'}}>✅</td>
                    <td style={{width: '25%', height: '25px', textAlign: 'center'}}>✅</td>
                </tr>
                <tr style={{height: '25px'}}>
                    <td style={{width: '25%', height: '25px', textAlign: 'center'}}>상태 관리</td>
                    <td style={{width: '25%', height: '25px', textAlign: 'center'}}>✅</td>
                    <td style={{width: '25%', height: '25px', textAlign: 'center'}}>✅</td>
                    <td style={{width: '25%', height: '25px', textAlign: 'center'}}>✅</td>
                </tr>
                <tr style={{height: '25px'}}>
                    <td style={{width: '25%', height: '25px', textAlign: 'center'}}>라우팅</td>
                    <td style={{width: '25%', height: '25px', textAlign: 'center'}}>✅</td>
                    <td style={{width: '25%', height: '25px', textAlign: 'center'}}>❎</td>
                    <td style={{width: '25%', height: '25px', textAlign: 'center'}}>✅</td>
                </tr>
                <tr style={{height: '25px'}}>
                    <td style={{width: '25%', height: '25px', textAlign: 'center'}}>양식 검증 &amp; 핸들링</td>
                    <td style={{width: '25%', height: '25px', textAlign: 'center'}}>✅</td>
                    <td style={{width: '25%', height: '25px', textAlign: 'center'}}>❎</td>
                    <td style={{width: '25%', height: '25px', textAlign: 'center'}}>❎</td>
                </tr>
                <tr style={{height: '18px'}}>
                    <td style={{width: '25%', height: '18px', textAlign: 'center'}}>Http 클라이언트</td>
                    <td style={{width: '25%', height: '18px', textAlign: 'center'}}>✅</td>
                    <td style={{width: '25%', height: '18px', textAlign: 'center'}}>❎</td>
                    <td style={{width: '25%', height: '18px', textAlign: 'center'}}>❎</td>
                </tr>
                </tbody>
            </table>
        )
    }
}



const Index = () => {
    return (
        <div>
            <h1>React & Next.js CRUD Example</h1>
            <p>
                React JS 는 Client Side Rendering 다루는 영역에 집중하고 있습니다. UX 를 빠르게 구현하는데 강점이 있지만, 서비스 규모가 커지게 되면
                Server Side Rendering 이나 코드 분할 패키징을 통해 비교적 규모가 큰 UX 상용 환경에서도 빠른 처리와 일관성 있는 프로젝트 레이아웃 등의 규칙을 필요로 합니다.
                Server Side Rendering
            </p>
            <div>
                <h3>Components</h3>
                <li><Link href="https://nextjs.org/">NextJS</Link>:
                    <ul>Server Side Rendering(SSR) 기능을 제공 합니다. 코드 분할 패키징, URI 라우팅, API Call 등.</ul>
                </li>
                <li><Link href="https://react-hook-form.com/api/useform">useForm</Link>:
                    <ul>
                        React Hook Form 은 네이티브 폼 유효성 검사를 지원합니다. 그래서 고유의 규칙을 설정하여 입력값을 검증할 수 있습니다.
                        register, handleSubmit, reset, formState 등의 폼 이벤트를 지원 합니다.
                    </ul>
                </li>
                <li><Link href="https://github.com/jquense/yup">Yup</Link>:
                    <ul>Form 유효성 체크를 위한 컴포넌트 입니다.</ul>
                </li>
                <br/>
                <li><Link href="https://reactjs.org/">React가 제공하지 않는 기능</Link>:
                    <ul>- SSR(Server Side Rendering)</ul>
                    <ul>- SSG(Static Site Generation)</ul>
                    <ul>- Type Checker</ul>
                    <ul>- Routing</ul>
                    <ul>- State management</ul>
                    <ul>- Styling</ul>
                    <ul>- Bundling</ul>
                    <ul>- Lazy loading</ul>
                    <ul>- Code splitting</ul>
                    <ul>- Static file serve</ul>
                    <ul>- Scroll restoration</ul>
                </li>
                <br/>
                <p><strong>Comparison frontend frameworks Angular, React, Vue</strong></p>
                <BenchmarkTable />
            </div>


        </div>
    )
}

export default Index;