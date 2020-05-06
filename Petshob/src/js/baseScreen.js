/*
Hugo de Azevedo Vitulli - 10295221
Luiz Guilherme Martins Adorno - 10392171
Matheus Vinicius - 10295217
*/

//Toggle Sidebar
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $(this).toggleClass('active');
    });
  });