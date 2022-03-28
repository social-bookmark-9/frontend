import { Label } from "../../elements";

export const HashTagMap = (props) => {
  const {hashtag1, hashtag2, hashtag3 } = props;
  
  const hashTagBundle = [hashtag1, hashtag2, hashtag3];
  const hashTag = hashTagBundle.filter(tag => tag !== null);

  return (
    <>
    {hashTag &&
      hashTag.map((tag, idx) => <Label key={idx}>{tag}</Label>)}
    </>
  )

};

