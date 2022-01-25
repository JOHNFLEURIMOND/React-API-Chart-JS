
import {
  Card,
  CardHeader,
  ThcCbdTitleFieldset,
  CardBody,
  NameFieldset,
  FlippedCardInfoFieldset,
  AVideo,
  StrainFieldset,
  CardImage,
  Caption
} from "./index";

const getProductCard = props => {
  return (
    <>
      <Card>
        <CardBody
          onClick={() => flipCard(false)}
          role="contentInfo"
          aria-pressed="false"
          aria-label="Product Card with a Image and a list of price, type of strain, thc and cbd levels."
        >
          <ThcCbdTitleFieldset aria-label="description">
            {props.description}
          </ThcCbdTitleFieldset>

          <ThcCbdTitleFieldset aria-label="videoOwnerChannelTitle">
            {props.videoOwnerChannelTitle}
          </ThcCbdTitleFieldset>
          <CardImage src={props.url} href={props.href} />
          <AVideo aria-label="videoOwnerChannelTitle" href={props.videoId}>
            <b>Watch Here: </b>
          </AVideo>
        </CardBody>
      </Card>
    </>
  );
};
export default getProductCard;
