$(document).ready(function () {
  function loadData(link) {
    $.ajax({
      type: "get",
      url: link,
      success: function (data) {
        $(".result").html(data);
      },
      error: function (err) {
        $(".error").html(err + "Loi request");
      },
    });
  }
  $("#tap1").on("click", function () {
    $(".data").html(
      '<embed src="/Ô long viện/Ô long viện Tập 01 Thầy giỏi trò tài.pdf" width="100%" height="100%" alt="pdf" scale="tofit" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">'
    );
  });
  $("#tap2").on("click", function () {
    $(".data").html(
      '<embed src="/Ô long viện/Ô long viện Tập 02 Anh em nhà ngốc.pdf" width="100%" height="100%" alt="pdf" scale="tofit" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">'
    );
  });
  $("#tap3").on("click", function () {
    $(".data").html(
      '<embed src="/Ô long viện/Ô long viện Tập 03 Hoa Đà tóc vàng.pdf" width="100%" height="100%" alt="pdf" scale="tofit" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">'
    );
  });
  $("#tap4").on("click", function () {
    $(".data").html(
      '<embed src="/Ô long viện/Ô long viện Tập 04 Lầm đường lạc lối.pdf" width="100%" height="100%" alt="pdf" scale="tofit" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">'
    );
  });
  $("#tap5").on("click", function () {
    $(".data").html(
      '<embed src="/Ô long viện/Ô long viện Tập 05 Nữ tướng Hoa Mộc Lan.pdf" width="100%" height="100%" alt="pdf" scale="tofit" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">'
    );
  });
  $("#tap6").on("click", function () {
    $(".data").html(
      '<embed src="/Ô long viện/Ô long viện Tập 06 Lucky baby.pdf" width="100%" height="100%" alt="pdf" scale="tofit" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">'
    );
  });
  $("#tap7").on("click", function () {
    $(".data").html(
      '<embed src="/Ô long viện/Ô long viện Tập 07 Olim pig.pdf" width="100%" height="100%" alt="pdf" scale="tofit" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">'
    );
  });
  $("#tap8").on("click", function () {
    $(".data").html(
      '<embed src="/Ô long viện/Ô long viện Tập 08 Uyên ương bong bóng.pdf" width="100%" height="100%" alt="pdf" scale="tofit" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">'
    );
  });
  $("#tap9").on("click", function () {
    $(".data").html(
      '<embed src="/Ô long viện/Ô long viện Tập 09 Trạng nguyên nhí.pdf" width="100%" height="100%" alt="pdf" scale="tofit" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">'
    );
  });
  $("#tap10").on("click", function () {
    $(".data").html(
      '<embed src="/Ô long viện/Ô long viện Tập 10 Đấu với hàng lậu.pdf" width="100%" height="100%" alt="pdf" scale="tofit" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">'
    );
  });
  $("#tap11").on("click", function () {
    $(".data").html(
      '<embed src="/Ô long viện/Ô long viện Tập 11 Mực và Quyền vương.pdf" width="100%" height="100%" alt="pdf" scale="tofit" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">'
    );
  });
  $("#tap12").on("click", function () {
    $(".data").html(
      '<embed src="/Ô long viện/Ô long viện Tập 12 Hoa đào 18.pdf" width="100%" height="100%" alt="pdf" scale="tofit" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">'
    );
  });

  // $("#thanhdt22_addcontent").on("click", function () {
  //   $(".result").html('<h3><b>Loading add content...<br>Please wait for 5 seconds...</b></h3>');
  //   setTimeout(function () {
  //     loadData("loadtruyen.html");
  //   },5000);

  // });
  // $("#thanhdt22_viewcontent").on("click", function () {
  //   $(".result").html('<h3><b>Loading view content...<br>Please wait for 5 seconds...</b></h3>');
  //   setTimeout(function () {
  //     loadData("viewcontent.html");
  //   },5000);
  // });
  // $("#thanhdt22_ediprofile").on("click", function () {
  //   $(".result").html('<h3><b>Loading edit profile content...<br>Please wait for 5 seconds...</b></h3>');
  //   setTimeout(function () {
  //     loadData("editprofile.html");
  //   },5000);
  // });
});
