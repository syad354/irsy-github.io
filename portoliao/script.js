function openProject(project) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    if (project === 'proyek1') {
        modalTitle.innerText = 'Proyek 1';
        modalDescription.innerText = 'Detail tentang Proyek 1.';
    } else if (project === 'proyek2') {
        modalTitle.innerText = 'Proyek 2';
        modalDescription.innerText = 'Detail tentang Proyek 2.';
    } else if (project === 'proyek3') {
        modalTitle.innerText = 'Proyek 3';
        modalDescription.innerText = 'Detail tentang Proyek 3.';
    }

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
