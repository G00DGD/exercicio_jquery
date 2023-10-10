$(document).ready(function () {
    $('button[type="submit"]').click(function (event) {
    event.preventDefault();

    var nomeTarefa = $('#nome-tarefa').val();

    if ($.trim(nomeTarefa) !== '') {
        var novoItem = $('<li></li>').text(nomeTarefa);
        var estaMarcado = false;

        novoItem.click(function () {
        if (estaMarcado) {
            $(this).css('text-decoration', 'none');
        } else {
            $(this).css('text-decoration', 'line-through');
        }
        estaMarcado = !estaMarcado;
        });

        $('#lista-tarefas').append(novoItem);

        $('#nome-tarefa').val('');
    }
    });
});