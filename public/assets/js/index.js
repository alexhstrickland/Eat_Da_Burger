$(".devour").click(function (e) {
  e.preventDefault();

  const ID = $(this).attr("data-id");

  $.ajax(
    {
      url: `/api/burgers/${id}`,
      method: "PUT",
      data: { devoured: 1 }
    })
  .then(reponse => location.reload());
});

$(".add").click((e) => {
  e.preventDefault();

  const burName = $("bur").val().trim();

  $.ajax(
    {
      url: `/api/burgers}`,
      method: "POST",
      data: { burger_name: burName }
    })
    .then(response => location.reload());
});