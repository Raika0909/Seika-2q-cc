function executeAnimation() {
	var submitButton = document.querySelector(".submit-button");
  
	// ボタンを非アクティブ化
	submitButton.disabled = true;
  
	// アニメーションを作成
	var animation = anime.timeline({
	    autoplay: true,
	});
  
	animation
	    .add({
		  targets: ".submit-button",
		  width: 0,
		  duration: 1000,
		  easing: "easeInOutSine",
	    })
	    .add({
		  targets: ".submit-button",
		  width: 300,
		  duration: 1000,
		  backgroundColor: "#2B2D2F",
		  easing: "easeInOutSine",
	    })
	    .add({
		  targets: ".submit-button",
		  width: 80,
		  height: 80,
		  borderRadius: 80,
		  backgroundColor: "#71DFBE",
		  duration: 1000,
		  complete: function () {
			// アニメーション完了時の処理
			submitButton.disabled = false; // ボタンを再度アクティブ化
			alert("決定しました！");
		  },
	    });
  }
  