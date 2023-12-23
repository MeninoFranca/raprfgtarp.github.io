document.addEventListener('DOMContentLoaded', function () {
    const downloadButton = document.getElementById('downloadButton');

    downloadButton.addEventListener('click', function () {
        const container = document.querySelector('.container');

        html2canvas(container, { scale: 1 }).then(canvas => {
            const imageData = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = imageData;
            link.download = 'relatorio_prf.png';
            link.click();
        });
    });
});