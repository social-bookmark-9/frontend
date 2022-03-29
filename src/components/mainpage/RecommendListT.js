const RecommendListT = () => {

  return (

<Tablet>
        <div
          style={{
            // margin: "0 -90px 0 -20px",
            padding: "32px 0 40px 0",
            backgroundColor: "#f2f3f4",
          }}
        >
          <Title _padding="0 0 20px 40px">추천 아티클</Title>
          <div
            style={{
              marginLeft: "-20px",
            }}
          >
            <Slider {...tabletSettings}>
              {images.map(item => {
                return (
                  <div key={item.id}>
                    <Card>
                      <div style={{ width: "30px", height: "30px" }}>
                        <img src={item.image} alt="" />
                      </div>
                      대충 글씨
                    </Card>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </Tablet>
  )
}

export default RecommendListT;