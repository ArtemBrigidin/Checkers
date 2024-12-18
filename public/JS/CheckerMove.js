window.onload = function () {

    const board = document.querySelector('.Board');
    const playerCemetery = document.getElementById('PlayerCemetry');
    const enemyCemetery = document.getElementById('EnemyCemetry');
    let selectedChecker = null;

    board.addEventListener('click', (event) => {
        const target = event.target.closest('.checker');
        if (target) {
            if (selectedChecker) selectedChecker.classList.remove('selected');
            selectedChecker = target !== selectedChecker ? target : null;
            if (selectedChecker) selectedChecker.classList.add('selected');
        } else if (selectedChecker) {
            moveChecker(event.target.closest('.Cell'));
        }
    });

    function moveChecker(cell) {
        if (!cell) return;

        const [startRow, startCol] = getGridArea(selectedChecker);
        const [endRow, endCol] = getGridArea(cell);
        const rowDiff = Math.abs(endRow - startRow);
        const colDiff = Math.abs(endCol - startCol);

        if (rowDiff === 1 && colDiff === 1) {
            updateCheckerPosition(endRow, endCol);
        } else if (rowDiff === 2 && colDiff === 2) {
            const middleChecker = getMiddleChecker(startRow, startCol, endRow, endCol);
            if (middleChecker) {
                captureChecker(middleChecker);
                updateCheckerPosition(endRow, endCol);
            }
        }
    }

    function getGridArea(element) {
        const [row, col] = element.style.gridArea.split(' / ').map(Number);
        return [row, col];
    }

    function updateCheckerPosition(row, col) {
        selectedChecker.style.gridArea = `${row} / ${col}`;
        selectedChecker.classList.remove('selected');
        selectedChecker = null;
    }

    function getMiddleChecker(startRow, startCol, endRow, endCol) {
        const middleRow = (startRow + endRow) / 2;
        const middleCol = (startCol + endCol) / 2;
        return [...document.querySelectorAll('.checker')].find(checker => {
            const [row, col] = getGridArea(checker);
            return row === middleRow && col === middleCol && checker !== selectedChecker;
        });
    }

    function captureChecker(checker) {
        checker.style.gridArea = '';

        if (checker.classList.contains('black')) {
            playerCemetery.appendChild(checker);
        } else {
            enemyCemetery.appendChild(checker);
        }
    }
};
