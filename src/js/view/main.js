import '../component/Navbar.js';
import '../component/Footer.js';
import '../component/ButtonAdd.js';
import '../component/AddForm.js';
import '../component/NoteList.js';
import '../component/IndikatorLoading.js';

const main = () =>{
	const url = 'https://notes-api.dicoding.dev/v2';
    
	const elementListNote = document.querySelector('note-list');
	const elementAddForm = document.querySelector('add-form');
	const elementNavbar = document.querySelector('nav-bar');
	const elementLoading = document.querySelector('indikator-loading');
	let tab = 'all';

	const searchNote = async () => {
		try{
			elementLoading.hidden = false;
			const keyword = elementNavbar.keyword;
			let status = false;
			let result = [];
			let resultSearch = [];
			let responseMassege = '';
			if (tab == 'all') {
				const responseArchived = await fetch(`${url}/notes/archived`);
				const responseJSONArchived = await responseArchived.json();
				const responseNonArchived = await fetch(`${url}/notes`);
				const responseJSONNonArchived = await responseNonArchived.json();
				status = responseJSONNonArchived.status == 'fail' || responseJSONArchived.status == 'fail';
				result = !status ? responseJSONNonArchived.data.concat(responseJSONArchived.data) : [];
				responseMassege = responseJSONArchived.message + '\n' + responseJSONNonArchived.message;
			} else if (tab == 'arsip') {
				const responseArchived = await fetch(`${url}/notes/archived`);
				const responseJSONArchived = await responseArchived.json();
				status = responseJSONArchived.status == 'fail';
				result = !status ? responseJSONArchived.data : [];
				responseMassege = responseJSONArchived.message;
			} else {
				const responseNonArchived = await fetch(`${url}/notes`);
				const responseJSONNonArchived = await responseNonArchived.json();
				status = responseJSONNonArchived.status == 'fail';
				result = !status ? responseJSONNonArchived.data : [];
				responseMassege = responseJSONNonArchived.message;
			}
			if(status){
				setTimeout(() => {
					showResponseMessage(responseMassege);
					elementLoading.hidden = true;
				}, 500);
			}else{
				resultSearch = result.filter(note => {
					return note.title.includes(keyword) || note.body.includes(keyword);
				});
				resultSearch.sort((a, b) => {
					return new Date(b.createdAt) - new Date(a.createdAt);
				});
				elementListNote.notes = resultSearch;
				elementLoading.hidden = true;
			}
		} catch(error){
			showResponseMessage(error.stack);
		}
	};

	const tabArsipNote = async () => {
		try{
			elementLoading.hidden = false;
			const response = await fetch(`${url}/notes/archived`);
			const responseJSON = await response.json();
			if(responseJSON.status == 'fail'){
				setTimeout(() => {
					showResponseMessage(responseJSON.message);
					elementLoading.hidden = true;
				}, 500);
			}else{
				tab = 'arsip';
				elementNavbar.setTabMenu('', 'active', '');
				elementListNote.notes = responseJSON.data.sort((a, b) => {
					return new Date(b.createdAt) - new Date(a.createdAt);
				});
				elementLoading.hidden = true;
			}
		} catch(error){
			showResponseMessage(error.stack);
		}
	};

	const tabNonArsipNote = async () => {
		try{
			elementLoading.hidden = false;
			const response = await fetch(`${url}/notes`);
			const responseJSON = await response.json();
			if(responseJSON.status == 'fail'){
				setTimeout(() => {
					showResponseMessage(responseJSON.message);
					elementLoading.hidden = true;
				}, 500);
			}else{
				tab = 'nonArsip';
				elementNavbar.setTabMenu('', '', 'active');
				elementListNote.notes = responseJSON.data.sort((a, b) => {
					return new Date(b.createdAt) - new Date(a.createdAt);
				});
				elementLoading.hidden = true;
			}
		} catch(error){
			showResponseMessage(error.stack);
		}
	};

	const deleteNote = async (id) => {
		try{
			const response = await fetch(`${url}/notes/${id}`, {
				method : 'DELETE'
			});
			const responseJSON = await response.json();
			setTimeout(() => {
				showResponseMessage(responseJSON.message);
			}, 500);

			if (tab == 'all') {
				getAllNotes();
			} else if (tab == 'arsip') {
				tabArsipNote();
			} else {
				tabNonArsipNote();
			}
		} catch(error){
			showResponseMessage(error.stack);
		}
	};

	const arsipNote = async (id) => {
		try{
			const response = await fetch(`${url}/notes/${id}/archive`, {
				method : 'POST',
			});
			const responseJSON = await response.json();
			setTimeout(() => {
				showResponseMessage(responseJSON.message);
			}, 500);

			if (tab == 'all') {
				getAllNotes();
			} else if (tab == 'arsip') {
				tabArsipNote();
			} else {
				tabNonArsipNote();
			}
		} catch(error){
			showResponseMessage(error.stack);
		}
	};

	const nonArsipNote = async (id) => {
		try{
			const response = await fetch(`${url}/notes/${id}/unarchive`, {
				method : 'POST',
			});
			const responseJSON = await response.json();
			setTimeout(() => {
				showResponseMessage(responseJSON.message);
			}, 500);

			if (tab == 'all') {
				getAllNotes();
			} else if (tab == 'arsip') {
				tabArsipNote();
			} else {
				tabNonArsipNote();
			}
		} catch(error){
			showResponseMessage(error.stack);
		}
	};

	const addNote = async (note) => {
		try{
			const response = await fetch(`${url}/notes`, {
				method : 'POST',
				headers: {
					'Content-Type':'application/json'
				},
				body: JSON.stringify(note)
			});
			elementAddForm.resetForm();
			const responseJSON = await response.json();
			setTimeout(() => {
				showResponseMessage(responseJSON.message);
			}, 500);
			if (tab == 'all') {
				getAllNotes();
			} else if (tab == 'arsip') {
				tabArsipNote();
			} else {
				tabNonArsipNote();
			}
		} catch(error){
			showResponseMessage(error.stack);
		}
	};

	const getAllNotes = async () => {
		try{
			elementLoading.hidden = false;
			const responseNonArchived = await fetch(`${url}/notes`);
			const responseArchived = await fetch(`${url}/notes/archived`);
			const responseJSONNonArchived = await responseNonArchived.json();
			const responseJSONArchived = await responseArchived.json();
			if(responseJSONNonArchived.status == 'fail' || responseJSONArchived.status == 'fail'){
				setTimeout(() => {
					showResponseMessage(responseJSONNonArchived.message + '\n' + responseJSONArchived.message);
					elementLoading.hidden = true;
				}, 500);
			}else{
				tab = 'all';
				const allNotes = responseJSONNonArchived.data.concat(responseJSONArchived.data);
				allNotes.sort((a, b) => {
					return new Date(b.createdAt) - new Date(a.createdAt);
				});
				elementNavbar.setTabMenu('active', '', '');
				elementListNote.notes = allNotes;
				elementLoading.hidden = true;
			}
		} catch(error){
			showResponseMessage(error.stack);
		}
	};

	const showResponseMessage = (message = 'Check your internet connection') => {
		alert(message);
	};

	elementAddForm.eventAddNote = addNote;

	elementNavbar.eventSearch = searchNote;
	elementNavbar.eventTabArsip = tabArsipNote;
	elementNavbar.eventTabNonArsip = tabNonArsipNote;
	elementNavbar.eventTabAllNotes = getAllNotes;

	elementListNote.eventDeleteNote = deleteNote;
	elementListNote.eventArsipNote = arsipNote;
	elementListNote.eventNonArsipNote = nonArsipNote;
	getAllNotes();
};

export default main;