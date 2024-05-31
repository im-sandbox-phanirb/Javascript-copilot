var steps = 0;
var messageElement = document.getElementById('message');
var stepsElement = document.getElementById('steps');
var movingDisk = null;
var fromTower = null;

function clickTower(towerId) {
    var tower = document.getElementById(towerId);
    var disks = Array.from(tower.childNodes).filter(node => node.className === 'disk');
    if (movingDisk === null) {
        // No disk is currently being moved, so pick up the top disk from this tower
        if (disks.length > 0) {
            movingDisk = disks[disks.length - 1];
            fromTower = towerId;
            messageElement.textContent = 'Picked up disk from ' + fromTower;
        } else {
            messageElement.textContent = 'No disks to pick up from ' + towerId;
        }
    } else {
        // A disk is currently being moved, so try to place it on this tower
        if (disks.length === 0 || parseInt(disks[disks.length - 1].id.replace('disk', '')) > parseInt(movingDisk.id.replace('disk', ''))) {
            // The tower is empty or the top disk is larger than the moving disk, so the move is valid
            document.getElementById(towerId).appendChild(movingDisk);
            movingDisk = null;
            fromTower = null;
            steps++;
            stepsElement.textContent = 'Steps: ' + steps;
            messageElement.textContent = 'Moved disk to ' + towerId;
        } else {
            messageElement.textContent = 'Cannot place disk on a smaller disk';
        }
    }
}