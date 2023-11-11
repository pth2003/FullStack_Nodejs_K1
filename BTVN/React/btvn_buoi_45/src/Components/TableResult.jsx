import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
const TableResult = () => {
  const roundHistory = JSON.parse(localStorage.getItem("roundHistory"));
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div>
      <h1 className="text-center">Lịch sử lượt chơi</h1>
      <Slider {...settings}>
        {roundHistory.map((roundGuesses, roundIndex) => (
          <div key={roundIndex}>
            <h2 className="text-center">Lượt chơi {roundIndex + 1}</h2>
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Lần nhập</th>
                  <th scope="col">Số nhập vào</th>
                </tr>
              </thead>
              <tbody>
                {roundGuesses.map((guess, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{guess}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TableResult;
