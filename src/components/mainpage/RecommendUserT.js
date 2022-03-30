const RecommendUserT = () => {

const images = [
  { id: 0, image: "/images/icon100.png" },
  { id: 1, image: "/images/icon101.png" },
  { id: 2, image: "/images/icon102.png" },
  { id: 3, image: "/images/icon103.png" },
  { id: 4, image: "/images/icon104.png" },
];

  return(
<Tablet>
        <div
          style={{
            margin: "0 auto 0 auto",
            maxWidth: "1194px",
            padding: "47px 40px 0 40px",
          }}
        >
          <Title _padding="0 0 20px 0">추천 유저</Title>
          <div style={{ margin: "0 19px 16px 0" }}>
            {images.map(item => (
              <div key={item.id} style={{ display: "inline-block" }}>
                <TabletCard>
                  <ProfileBox>
                    {/*  그거... 동그라미 */}
                    <CircleBox>
                      <Circle
                        _width="15.7px"
                        _height="15.7px"
                        bgColor="black"
                      />
                    </CircleBox>
                    <ProfileImage>
                      <img
                        src={item.image}
                        alt="profile"
                        style={{ zIndex: "3" }}
                      />
                    </ProfileImage>
                    <Title _padding="23px 15px 2px 15px" textAlign="center">
                      김철수
                    </Title>
                    <Text
                      _color="#3E3E3E"
                      _fontSize="13px"
                      _padding="0 0 8px 0"
                      textAlign="center"
                    >
                      글쓰는 UX디자이너
                    </Text>
                    <div style={{ display: "inline-block" }}>
                      <Button _width="76px" _padding="6px" borderRadius="45px">
                        구경하기
                      </Button>
                    </div>
                  </ProfileBox>
                </TabletCard>
              </div>
            ))}
          </div>
        </div>
      </Tablet>
  )
}

export default RecommendUserT;