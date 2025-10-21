import Image from "next/image";
import { Container } from "react-bootstrap";
import ContentSection from "../ContentSection";
import Box from "../Core/Box";
import classes from "./SearchContentSection.module.css";
import ClientButton from "./_clientButton";
function SearchContentSection({ heading, description, imageLight, imageDark }) {
  return (
    <Box className={classes.searchContentSection}>
      <Container>
        <div className={classes.searchContentSection__wrapper}>
          <ContentSection
            center={false}
            description={description}
            heading={heading}
          >
            <ClientButton />
          </ContentSection>
          <div className={classes.image}>
            <Image
              src={imageLight}
              alt="search-content-section"
              layout="fill"
              className={classes.lightImage}
            />
            <Image
              src={imageDark}
              alt="search-content-section"
              layout="fill"
              className={classes.darkImage}
            />
          </div>
        </div>
      </Container>
    </Box>
  );
}

export default SearchContentSection;
