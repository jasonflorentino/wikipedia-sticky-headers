const START = Date.now();
const DEBUG = true;
const WAIT_MS = 1000;

// Looks like the document doesn't actally come with <thead> and 
// that maybe the browser is implicitly adding them? I thought that 
// `run_at: document_idle` would help. Apparently there's no
// need to listen for window.onload and that the DOM will be
// complete (document.readyState === 'interactive', not 'complete',
// when this first runs), BUT the browser still gets to choose
// when to inject the script.[1] Even still, waiting for 
// document.readyState === 'complete' isn't enough either -- 
// <thead> is still not found in <table>. Perhaps there's some
// script involving the tables that runs, resulting in the structure
// we end up interacting with on the page? Whatever the case, let's
// just wait for a second efore querying the document to better 
// ensure <thead> elements have finished materializing.
// 
// [1] https://developer.chrome.com/docs/extensions/reference/api/extensionTypes#type-RunAt
setTimeout(function stickyHeaders() {
	let updated = 0;
	let skipped = 0;
	// find all tables in document
	const tables = document.querySelectorAll('TABLE')
	log(`found ${tables.length} tables`);
	log('updating table headers');
	tables.forEach((table) => {
		// for the header to sticky first try for a <thead>
		// otherwise use the first <tr>
		const header = getHeader(table);
		if (!header) return ++skipped;
		// try to avoid horz oriented headers; first row in this case would be data
		if (isRow(header) || isRow(header.firstElementChild)) return ++skipped;
		// make header element sticky
		header.style.setProperty('position', 'sticky');
		header.style.setProperty('top', '0');
		updated++;
	})
	log(`updated: ${updated} skipped: ${skipped}`);
	log('finished');
}, WAIT_MS);

function getHeader(table) {
	let header = table.querySelector('THEAD')
	if (header && header.clientHeight > 0) {
		// We found one and it has a height! Use this.
	} else {
		// THEAD not found, try the first TR
		header = table.querySelector('TR');
		// but dont use the TR if it has an image in it.
		if (header && header.querySelector('IMG')) {
			header = null;
		}
	}
	return header;
}

function isRow(el) {
	return el?.getAttribute('scope') === 'row';
}

function log(...args) {
	DEBUG && console.log(`%c [WikiSticky] +${Date.now() - START}`, 'font-wegith: bold; color: #0088ff;', ...args);
}

log('loaded');
log(`waiting ${WAIT_MS}ms`);
