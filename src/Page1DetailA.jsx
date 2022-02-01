import { useLocation, useHistory } from "react-router-dom";
export const Page1DetailA = () => {
  const { state } = useLocation();
  const history = useHistory();
  console.log(history);
  const onClickBack = () => {
    history.goBack();
  };
  return (
    <div>
      <p>Page1DetailAです</p>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
