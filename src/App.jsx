import styled from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.main`
    padding: 20px;
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <StyledApp>
                <Row type="vertical">
                    <Row type="horizontal">
                        <Heading as="h1">The Wild Oasis</Heading>
                        <div>
                            <Heading as="h2">Check in and out</Heading>
                            <Button>Check in</Button>
                            <Button>Check Out</Button>
                        </div>
                    </Row>
                    <Row type="vertical">
                        <Heading as="h3">Form</Heading>
                        <div>
                            <Input type="number" placeholder="number" />
                            <Input type="number" placeholder="number" />
                        </div>
                    </Row>
                </Row>
            </StyledApp>
        </>
    );
}

export default App;
