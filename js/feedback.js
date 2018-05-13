/* https://www.jqueryscript.net/form/Simple-jQuery-Plugin-For-Popup-Feedback-Form-Feedback.html under MIT license */

$(function() {
	$("#feedback-tab").click(function() {
		$("#feedback-form").toggle("slide");
	});

	$("#feedback-form form").on("submit", function(event) {
        $("#feedback-form").toggle("slide").find("textarea").val("");
        return false;
	});
});

