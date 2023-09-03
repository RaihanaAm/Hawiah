import { Main } from './pages/main'

export const App = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const type = queryParameters.get("id");
  console.log(queryParameters)
  console.log(type);
  // !!!!!!
  const currentUrl = window.location;
  console.log(currentUrl);
  return (
    <div>
      <Main />
    </div>
  )

}