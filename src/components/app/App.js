import "./styles.css";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper"
import starList from "/src/mocks/mocks"
export default function App() {
  return (  
      <PageWrapper stars={starList}/> 
  );
}
