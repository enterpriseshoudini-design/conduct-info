/* ================= configuration — edit these for your school ================= */
var SCHOOL_NAME = "Bombay Kids International School";
const SCHOOL_ADDRESS = "Arihant Nagar, Indore (M.P.)";
const SCHOOL_PHONE = "9981258867";
var SCHOOL_DISE_CODE = "23260503114";
var SCHOOL_REG_NO = "168774";
var SCHOOL_DISTRICT = "Indore";
const LOGO_DATA_URI = "data:image/jpeg;base64,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";
var CLASS_LEVELS = ['Nursery','KG-I','KG-II','1','2','3','4','5','6','7','8','9','10'];
var BOARD_CLASSES = ['5','8','10'];
var TERMS = ['Admission Fee','Term 1 (June-July)','Term 2 (October)','Term 3 (January)','Board Exam Fee','Other'];
// Per-class tuition installments, from the school's fee structure chart.
// Admission fee is a flat ₹500 for every class.
var FEE_STRUCTURE = {
  'Nursery':     {admissionFee:500, term1:5000, term2:4000, term3:2000},
  'KG-I':        {admissionFee:500, term1:5000, term2:5000, term3:2000},
  'KG-II':       {admissionFee:500, term1:5000, term2:5000, term3:3000},
  '1':           {admissionFee:500, term1:5000, term2:5000, term3:3000},
  '2':           {admissionFee:500, term1:5000, term2:5000, term3:3000},
  '3':           {admissionFee:500, term1:6000, term2:5000, term3:3000},
  '4':           {admissionFee:500, term1:6000, term2:5000, term3:3000},
  '5':           {admissionFee:500, term1:6000, term2:6000, term3:3000},
  '6':           {admissionFee:500, term1:6000, term2:5000, term3:3000},
  '7':           {admissionFee:500, term1:6000, term2:5000, term3:3000},
  '8':           {admissionFee:500, term1:6000, term2:5000, term3:3000},
  '9':           {admissionFee:500, term1:6000, term2:6000, term3:3000},
  '10':          {admissionFee:500, term1:6000, term2:6000, term3:3000},
};
// Board exam form charges — Class 5 & 8 vs Class 9 & 10, per the school's policy.
function getBoardExamFee(cls){
  if(cls==='5' || cls==='8') return 500;
  if(cls==='10') return 2350;
  return 0;
}
// Auto-computes what's due for a given student + fee particulars, from the fee structure above.
function computeTotalDue(studentId, particulars){
  const s = students.find(x=>x.id===studentId);
  if(!s) return 0;
  const fs = FEE_STRUCTURE[s.cls];
  if(particulars==='Admission Fee') return fs ? fs.admissionFee : 500;
  if(particulars==='Term 1 (June-July)') return fs ? fs.term1 : 0;
  if(particulars==='Term 2 (October)') return fs ? fs.term2 : 0;
  if(particulars==='Term 3 (January)') return fs ? fs.term3 : 0;
  if(particulars==='Board Exam Fee') return getBoardExamFee(s.cls);
  return 0; // 'Other' — admin enters manually via the Negotiated Fee override
}
/* ================================================================================ */

const LS = { students:'conduct_students', enquiries:'conduct_enquiries', staff:'conduct_staff', fees:'conduct_fees', salaries:'conduct_salaries', attendance:'conduct_attendance', studentAttendance:'conduct_student_attendance', staffAttendance:'conduct_staff_attendance', users:'conduct_users', seeded:'conduct_seeded_v1', feesSeeded:'conduct_fees_seeded_v1', class10Imported:'conduct_class10_import_v1', kg2to9Imported:'conduct_kg2to9_import_v1', usersSeeded:'conduct_users_seeded_v1', timeTable:'conduct_timetable_image', timeTableData:'conduct_timetable_data', timeTableSeeded:'conduct_timetable_seeded_v1', expenses:'conduct_expenses', distributionItems:'conduct_distribution_items', distributionRecords:'conduct_distribution_records', notices:'conduct_notices', coreDataReset:'conduct_core_data_reset_v1', roster202627Imported:'conduct_roster_2026_27_v1', exams:'conduct_exams', examMarks:'conduct_exam_marks', session:'conduct_session' };

var students = [], enquiries = [], staffList = [], fees = [], salaries = [], attendanceRecords = [], users = [], studentAttendance = [], staffAttendance = [], expenses = [], distributionItems = [], distributionRecords = [], notices = [], exams = [], examMarks = [];
var timeTableData = { periods: [], cells: {} };
var attendanceView = { cls: '', date: '' };
var staffAttendanceView = { date: '' };
var distributionView = { itemId: '', cls: '' };
var noticesTab = 'students';
var view = { name: 'dashboard', studentId: null };
var studentFilters = { q:'', status:'', category:'' };
var feeFilters = { session:'', cls:'', status:'' };
var salaryFilters = { month:'', status:'' };
var staffFilters = { role:'', status:'' };
var dashboardTimeframe = 'thisMonth';

/* ---------------- roles & permissions ----------------
   Access control lives entirely in this browser's JavaScript — it stops
   staff from casually clicking into (or editing) sections they shouldn't,
   but it is not cryptographic security. Anyone with browser dev tools can
   still read the underlying data. Treat this as organizational access
   control, not a guarantee against a deliberate technical attempt.

   Two independent layers: VIEW (can this person even see the section?)
   and EDIT (can they add/change/delete records in it, once they can see
   it?). By default only Admin gets edit rights anywhere — Board and
   Office Staff start view-only, and the admin grants editing per person,
   per module, from User Access. */
var VIEW_PERMISSION_KEYS = ['dashboard','enquiries','students','staffDirectory','studentAttendance','staffAttendance','fees','salary','expenses','distribution','exams','userManagement'];
var EDIT_PERMISSION_KEYS = ['enquiries','students','staffDirectory','studentAttendance','staffAttendance','fees','salary','expenses','distribution','notices','timetable','exams'];
const VIEW_PERMISSION_LABELS = {
  dashboard: 'Dashboard', enquiries: 'Enquiries', students: 'Students (admissions, TC)',
  staffDirectory: 'Staff Directory', studentAttendance: 'Student Attendance', staffAttendance: 'Staff Attendance',
  fees: 'Fees', salary: 'Salary', expenses: 'Expenses', distribution: 'Distribution', exams: 'Exams & Report Cards', userManagement: 'User Access (admin)',
};
const EDIT_PERMISSION_LABELS = {
  enquiries: 'Enquiries', students: 'Students', staffDirectory: 'Staff Directory',
  studentAttendance: 'Student Attendance', staffAttendance: 'Staff Attendance', fees: 'Fees', salary: 'Salary',
  expenses: 'Expenses', distribution: 'Distribution', notices: 'Notices & Rules', timetable: 'Time Table', exams: 'Exams & Report Cards',
};
const ROLE_LABELS = { admin: 'Admin', board: 'Board of Directors', office: 'Office Staff', custom: 'Custom' };
const ROLE_PRESETS = {
  admin: {
    view: { dashboard:true, enquiries:true, students:true, staffDirectory:true, studentAttendance:true, staffAttendance:true, fees:true, salary:true, expenses:true, distribution:true, exams:true, userManagement:true },
    edit: { enquiries:true, students:true, staffDirectory:true, studentAttendance:true, staffAttendance:true, fees:true, salary:true, expenses:true, distribution:true, notices:true, timetable:true, exams:true },
  },
  board: {
    view: { dashboard:true, enquiries:true, students:true, staffDirectory:true, studentAttendance:true, staffAttendance:true, fees:true, salary:true, expenses:true, distribution:true, exams:true, userManagement:false },
    edit: { enquiries:false, students:false, staffDirectory:false, studentAttendance:false, staffAttendance:false, fees:false, salary:false, expenses:false, distribution:false, notices:false, timetable:false, exams:false },
  },
  office: {
    view: { dashboard:true, enquiries:true, students:true, staffDirectory:true, studentAttendance:true, staffAttendance:true, fees:true, salary:false, expenses:false, distribution:true, exams:true, userManagement:false },
    edit: { enquiries:false, students:false, staffDirectory:false, studentAttendance:false, staffAttendance:false, fees:false, salary:false, expenses:false, distribution:false, notices:false, timetable:false, exams:false },
  },
  custom: {
    view: { dashboard:true, enquiries:false, students:false, staffDirectory:false, studentAttendance:false, staffAttendance:false, fees:false, salary:false, expenses:false, distribution:false, exams:false, userManagement:false },
    edit: { enquiries:false, students:false, staffDirectory:false, studentAttendance:false, staffAttendance:false, fees:false, salary:false, expenses:false, distribution:false, notices:false, timetable:false, exams:false },
  },
};
function currentUser(){
  try{
    const session = JSON.parse(localStorage.getItem(LS.session) || 'null');
    if(!session) return null;
    return users.find(u => u.id === session.userId && u.status === 'active') || null;
  }catch(e){ return null; }
}
function can(permKey){
  const u = currentUser();
  if(!u) return false;
  if(u.role === 'admin') return true; // admin always has view rights, regardless of stored flags — matches canEdit()
  return !!(u.permissions && u.permissions.view && u.permissions.view[permKey]);
}
function canEdit(permKey){
  const u = currentUser();
  if(!u) return false;
  if(u.role === 'admin') return true; // admin always has edit rights, regardless of stored flags
  return !!(u.permissions && u.permissions.edit && u.permissions.edit[permKey]);
}
/** Upgrades any user record still on the old flat permissions shape
 *  (from before view/edit were split) to the new nested shape, in place.
 *  Existing view access is preserved exactly; edit access starts closed
 *  for everyone except admins, matching the new default. */
function migrateUserPermissionsIfNeeded(){
  let changed = false;
  users.forEach(u => {
    if(u.permissions && !u.permissions.view){
      const oldFlat = u.permissions;
      const view = Object.assign({ studentAttendance: !!oldFlat.students, staffAttendance: !!oldFlat.staffDirectory }, oldFlat);
      const edit = {};
      EDIT_PERMISSION_KEYS.forEach(k => { edit[k] = u.role === 'admin'; });
      u.permissions = { view, edit };
      changed = true;
    }
  });
  if(changed) saveAll();
}
/** Fills in any permission keys added in a later update that an existing
 *  (already-migrated) user record predates — e.g. a user created before
 *  Expenses existed won't have a view.expenses flag at all. Admin always
 *  backfills to true; everyone else backfills from their role's preset
 *  for view, and stays closed for edit (requirement: edit defaults off). */
function backfillPermissionKeysIfNeeded(){
  let changed = false;
  users.forEach(u => {
    if(!u.permissions) { u.permissions = { view:{}, edit:{} }; changed = true; }
    if(!u.permissions.view) { u.permissions.view = {}; changed = true; }
    if(!u.permissions.edit) { u.permissions.edit = {}; changed = true; }
    const preset = ROLE_PRESETS[u.role] || ROLE_PRESETS.custom;
    if(u.role === 'admin'){
      // an admin's stored permissions should always fully reflect that — fixes any account
      // left with incomplete or stale (even explicitly false) values from an older version.
      VIEW_PERMISSION_KEYS.forEach(k => { if(u.permissions.view[k] !== true){ u.permissions.view[k] = true; changed = true; } });
      EDIT_PERMISSION_KEYS.forEach(k => { if(u.permissions.edit[k] !== true){ u.permissions.edit[k] = true; changed = true; } });
    } else {
      VIEW_PERMISSION_KEYS.forEach(k => {
        if(!(k in u.permissions.view)){ u.permissions.view[k] = !!preset.view[k]; changed = true; }
      });
      EDIT_PERMISSION_KEYS.forEach(k => {
        if(!(k in u.permissions.edit)){ u.permissions.edit[k] = false; changed = true; }
      });
    }
  });
  if(changed) saveAll();
}

/* ---------------- utils ---------------- */
function uid(prefix){ return prefix + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2,7); }
function escapeHtml(str){
  return String(str==null?'':str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
/** Renders a file <input> plus a small "chosen filename with an × to remove it"
 *  chip beneath it. Native file inputs give no way to clear a selection once
 *  made except re-picking — this adds that everywhere a file gets chosen. */
function fileInputWithClear(id, name, accept, onchangeExtra){
  const onchange = "updateFileChip('" + id + "')" + (onchangeExtra ? ';' + onchangeExtra : '');
  return `
    <div class="file-input-wrap">
      <input type="file" id="${id}"${name?` name="${name}"`:''}${accept?` accept="${accept}"`:''} onchange="${onchange}" />
      <div class="file-chip" id="${id}_chip" style="display:none;">
        <span class="file-chip-name"></span>
        <button type="button" class="file-chip-clear" onclick="clearFileInput('${id}')" title="Remove file">&times;</button>
      </div>
    </div>`;
}
function updateFileChip(inputId){
  const input = document.getElementById(inputId);
  const chip = document.getElementById(inputId + '_chip');
  if(!input || !chip) return;
  if(input.files && input.files.length > 0){
    chip.querySelector('.file-chip-name').textContent = input.files[0].name;
    chip.style.display = 'inline-flex';
  } else {
    chip.style.display = 'none';
  }
}
function clearFileInput(inputId){
  const input = document.getElementById(inputId);
  const chip = document.getElementById(inputId + '_chip');
  if(input) input.value = '';
  if(chip) chip.style.display = 'none';
}
function initials(a,b){ return ((a||' ').charAt(0)+(b||' ').charAt(0)).toUpperCase().trim() || '?'; }
function formatDate(iso){
  if(!iso) return '—';
  const d = new Date(iso);
  if(isNaN(d)) return '—';
  return d.toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});
}
function currentAcademicYear(){
  const now = new Date();
  const startYear = now.getMonth() >= 5 ? now.getFullYear() : now.getFullYear()-1;
  return startYear + '-' + String((startYear+1)%100).padStart(2,'0');
}
function currentMonthKey(){ return new Date().toISOString().slice(0,7); }
function monthLabel(key){
  if(!key) return '—';
  const [y,m] = key.split('-');
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return months[parseInt(m,10)-1] + ' ' + y;
}
const TIMEFRAME_LABELS = {today:'Today', thisMonth:'This Month', thisSession:'This Academic Year'};
function getTimeframeRange(tf){
  const now = new Date();
  if(tf === 'today'){
    const iso = todayIso();
    return {start: iso, end: iso};
  }
  if(tf === 'thisMonth'){
    const y = now.getFullYear(), m = now.getMonth();
    const start = new Date(y, m, 1).toISOString().slice(0,10);
    const end = new Date(y, m+1, 0).toISOString().slice(0,10);
    return {start, end};
  }
  // thisSession — Indian academic year, roughly June through the following May
  const startYear = now.getMonth() >= 5 ? now.getFullYear() : now.getFullYear()-1;
  return {start: startYear+'-06-01', end: (startYear+1)+'-05-31'};
}
function inRange(dateStr, range){
  if(!dateStr) return false;
  const d = dateStr.slice(0,10);
  return d >= range.start && d <= range.end;
}
function monthKeyInRange(monthKey, tf){
  if(!monthKey) return false;
  if(tf === 'today' || tf === 'thisMonth') return monthKey === currentMonthKey();
  const range = getTimeframeRange('thisSession');
  return monthKey >= range.start.slice(0,7) && monthKey <= range.end.slice(0,7);
}
function todayIso(){ return new Date().toISOString().slice(0,10); }

const ONES = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
const TENS = ['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
function numberToWords(n){
  if(n === 0) return 'Zero';
  if(n < 20) return ONES[n];
  if(n < 100) return TENS[Math.floor(n/10)] + (n%10 ? ' ' + ONES[n%10] : '');
  if(n < 1000) return ONES[Math.floor(n/100)] + ' Hundred' + (n%100 ? ' ' + numberToWords(n%100) : '');
  if(n < 100000) return numberToWords(Math.floor(n/1000)) + ' Thousand' + (n%1000 ? ' ' + numberToWords(n%1000) : '');
  return String(n);
}
function ordinal(n){
  const s = ['th','st','nd','rd'], v = n % 100;
  return n + (s[(v-20)%10] || s[v] || s[0]);
}
function dateInWords(iso){
  if(!iso) return '—';
  const d = new Date(iso);
  if(isNaN(d)) return '—';
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return ordinal(d.getDate()) + ' ' + months[d.getMonth()] + ' ' + numberToWords(d.getFullYear());
}
function pronounSet(gender){
  if(gender === 'Female') return {subj:'She', poss:'Her', child:'daughter'};
  if(gender === 'Male') return {subj:'He', poss:'His', child:'son'};
  return {subj:'They', poss:'Their', child:'son/daughter'};
}
/** "7" -> "7th", "KG-II" -> "KG-II" (only numeric classes take an ordinal suffix) */
function classOrdinal(value){
  if(!value) return '—';
  const trimmed = String(value).trim();
  return /^\d+$/.test(trimmed) ? ordinal(parseInt(trimmed,10)) : trimmed;
}
function feeStatus(rec){
  const due = Number(rec.amountDue)||0, paid = Number(rec.amountPaid)||0;
  if(paid <= 0) return 'pending';
  if(paid < due) return 'partial';
  return 'paid';
}
function money(n){ return '₹' + (Number(n)||0).toLocaleString('en-IN'); }
/** '5' -> 'Class 5'; non-numeric names (Pre Nursery, KG-I...) are already proper names, left as-is. */
function classDisplayLabel(cls){
  return /^\d+$/.test(cls) ? 'Class ' + cls : cls;
}
function fileToBase64(file){
  return new Promise((resolve, reject) => {
    if(!file){ resolve(null); return; }
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
/** Downscales a large photographed image (e.g. a timetable shot on a phone)
 *  before storing it as base64, so it doesn't eat the localStorage quota. */
function resizeImageFile(file, maxDim, quality){
  return new Promise((resolve, reject) => {
    if(!file){ resolve(null); return; }
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let w = img.width, h = img.height;
        if(w > maxDim || h > maxDim){
          if(w > h){ h = Math.round(h * maxDim/w); w = maxDim; }
          else { w = Math.round(w * maxDim/h); h = maxDim; }
        }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', quality || 0.85));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
function avatarHtml(photo, firstName, lastName, size){
  if(photo) return `<img src="${photo}" alt="" style="width:${size}px;height:${size}px;border-radius:50%;object-fit:cover;flex-shrink:0;" />`;
  return `<span class="avatar" style="width:${size}px;height:${size}px;font-size:${Math.round(size*0.36)}px;">${initials(firstName,lastName)}</span>`;
}

/* ---------------- storage ---------------- */
function loadData(){
  students = JSON.parse(localStorage.getItem(LS.students) || '[]');
  enquiries = JSON.parse(localStorage.getItem(LS.enquiries) || '[]');
  staffList = JSON.parse(localStorage.getItem(LS.staff) || '[]');
  fees = JSON.parse(localStorage.getItem(LS.fees) || '[]');
  salaries = JSON.parse(localStorage.getItem(LS.salaries) || '[]');
  attendanceRecords = JSON.parse(localStorage.getItem(LS.attendance) || '[]');
  users = JSON.parse(localStorage.getItem(LS.users) || '[]');
  studentAttendance = JSON.parse(localStorage.getItem(LS.studentAttendance) || '[]');
  staffAttendance = JSON.parse(localStorage.getItem(LS.staffAttendance) || '[]');
  timeTableData = JSON.parse(localStorage.getItem(LS.timeTableData) || '{"periods":[],"cells":{}}');
  expenses = JSON.parse(localStorage.getItem(LS.expenses) || '[]');
  distributionItems = JSON.parse(localStorage.getItem(LS.distributionItems) || '[]');
  distributionRecords = JSON.parse(localStorage.getItem(LS.distributionRecords) || '[]');
  notices = JSON.parse(localStorage.getItem(LS.notices) || '[]');
  exams = JSON.parse(localStorage.getItem(LS.exams) || '[]');
  examMarks = JSON.parse(localStorage.getItem(LS.examMarks) || '[]');
}
function saveAll(){
  localStorage.setItem(LS.students, JSON.stringify(students));
  localStorage.setItem(LS.enquiries, JSON.stringify(enquiries));
  localStorage.setItem(LS.staff, JSON.stringify(staffList));
  localStorage.setItem(LS.fees, JSON.stringify(fees));
  localStorage.setItem(LS.salaries, JSON.stringify(salaries));
  localStorage.setItem(LS.attendance, JSON.stringify(attendanceRecords));
  localStorage.setItem(LS.users, JSON.stringify(users));
  localStorage.setItem(LS.studentAttendance, JSON.stringify(studentAttendance));
  localStorage.setItem(LS.staffAttendance, JSON.stringify(staffAttendance));
  localStorage.setItem(LS.timeTableData, JSON.stringify(timeTableData));
  localStorage.setItem(LS.expenses, JSON.stringify(expenses));
  localStorage.setItem(LS.distributionItems, JSON.stringify(distributionItems));
  localStorage.setItem(LS.distributionRecords, JSON.stringify(distributionRecords));
  localStorage.setItem(LS.notices, JSON.stringify(notices));
  localStorage.setItem(LS.exams, JSON.stringify(exams));
  localStorage.setItem(LS.examMarks, JSON.stringify(examMarks));
}
function seedUsersIfNeeded(){
  // No default account is ever created here. If no users exist yet, the
  // first-run setup screen (see the setupForm handler below) creates the
  // first Admin account with credentials the person setting it up chooses
  // themselves — nothing secret is ever hardcoded into this file.
}
/** One-time, one-way clean slate: wipes Students, Enquiries, Staff, Fees,
 *  Salaries, both Attendance registers, and the Time Table — everything
 *  explicitly requested to be cleared for go-live. User accounts, Notices,
 *  Distribution, and Expenses are left untouched (not requested). */
function resetCoreDataIfNeeded(){
  if(localStorage.getItem(LS.coreDataReset)) return;
  localStorage.setItem(LS.coreDataReset, '1');
  students = [];
  enquiries = [];
  staffList = [];
  fees = [];
  salaries = [];
  studentAttendance = [];
  staffAttendance = [];
  attendanceRecords = [];
  timeTableData = { periods: [], cells: {} };
  saveAll();
}
/** One-time import of the live 2026-27 roster (400 students, Nursery
 *  through Class 10) from the school's own Excel workbook. Runs once,
 *  after the reset above, onto what is by then a guaranteed-empty
 *  students array — purely additive from that point on. */
function importRoster202627IfNeeded(){
  if(localStorage.getItem(LS.roster202627Imported)) return;
  localStorage.setItem(LS.roster202627Imported, '1');

  // [firstName,lastName,fatherName,motherName,dob,category,studentAadhar,studentSSSM,address,phone,schNo,cls,section,rollNumber]
  const rows = [
      ['SOMESH','CHOUHAN','SURAJ CHOUHAN','ARTI CHOUHAN','2022-09-10','','','','','','','Nursery','A','1'],
      ['REHMAT','SHAH','ALTAF SHAH','MUSKAN','2023-03-13','','','','','','','Nursery','A','2'],
      ['AAKANSHA','UNTWAL','RAVI UNTWAL','RADHA UNTWAL','2022-08-17','','','','','','','Nursery','A','3'],
      ['RAGHAV','PRAJAPAT','RAHUL','AASHA','2022-02-26','','','','','','','Nursery','A','4'],
      ['UTSAV','PRAJAPAT','VINOD PRAJAPAT','KIRAN PRAJAPAT','2022-07-03','','','','','','','Nursery','A','5'],
      ['YUVIKA','DAWAR','MUKESH SAWAR','DURGA DAWAR','','','','','','','','Nursery','A','6'],
      ['ALISA','MAKWANA','SANTOSH  MAKWANA','RACHANA MAKWANA','2020-09-08','ST','964431841539','314133295','BUDHANIYA','9340198005','591','KG-I','A','1'],
      ['ARIBA','ARIBA','MOHMMAD SOYAB','FIRDOS','2022-03-02','OBC','860523020919','318928759','GANDHI NAGAR','8982288928','609','KG-I','A','2'],
      ['DEVANSHI','CHOUHAN','PANKAJ   CHOUHAN','JYOTI CHOUHAN','2021-07-01','SC','820456793559','313367497','JAMBUDI HAPSI','7974646875','608','KG-I','A','3'],
      ['DEVANSH','SHARMA','RAHUL SHARMA','SONALI SHARMA','2021-09-21','','','','','','','KG-I','A','4'],
      ['HARSHITA','KUMAWAT','SURESH KUMAWAT','PREMI KUMAWAT','2021-11-19','OBC','840894344247','320487288','ARIHANT NAGAR','9587953448','532','KG-I','A','5'],
      ['KUNJAL','SEN','RAMPAL SEN','RUPA SEN','2022-06-29','','','','','','','KG-I','A','6'],
      ['RAHNUMA','RAHNUMA','ALTAF','MUSKAN','2021-04-01','OBC','952489563286','313239377','BUDHANIYA','8085660187','611','KG-I','A','7'],
      ['REENA','KUNWAR SOLANKI','SANTOSH SINGH SOLANKI','SAROJ SOLANKI','2020-12-11','General','','','ARIHANT NAGAR','9303513483','594','KG-I','A','8'],
      ['RIDANSHI','UNTWAL','ANISH  UNTWAL','MANISHA UNTWAL','2021-12-02','SC','711102360841','315045135','ARIHANT NAGAR','9893798667','637','KG-I','A','9'],
      ['RUHI','SARVAR','RAKESH  SARVAR','RADHIKA  SARVAR','2022-02-02','General','856991284531','','ARIHANT NAGAR','7999614115','580','KG-I','A','10'],
      ['SHRASHTI','LODHI','SANTOSH  LODHI','SOMA  LODHI','2021-09-17','OBC','383471662855','','461 ARIHANT NAGAR','8109778761','559','KG-I','A','11'],
      ['SAANVI','NAMDEV','RAHUL  NAMDEV','BHARTI  NAMDEV','2022-03-17','OBC','264904665171','','607/2/2 GOMTESH CITY','8819994004','555','KG-I','A','12'],
      ['SANJIVNI','MAKWANA','SANJAY  MAKWANA','LAXMIBAI  MAKWANA','2022-02-07','ST','696507006171','318232909','BUDHANIYA','8085153451','605','KG-I','A','13'],
      ['SIYA','MAKWANA','KAILASH  MAKWANA','NEHA  MAKWANA','2020-08-24','ST','318279342128','315153666','BUDHANIYA','9340198005','590','KG-I','A','14'],
      ['SRASHTI','GOUR','JITESH  GOUR','BHAVNA   GOUR','2022-11-30','OBC','491767252996','320368326','544 ARIHANT NAGAR','9589166680','558','KG-I','A','15'],
      ['SONIKA','THAKUR','PRABHAN','KAMINI','2022-02-02','','','','','','','KG-I','A','16'],
      ['AKHIL','ALAVA','SANJAY  ALAVA','REENA  ALAVA','2021-09-05','ST','575203092301','318164651','BHERU MAHARAJ','8839665079','577','KG-I','A','17'],
      ['AKSHAT','BAGWAN','RAJESH  BAGWAN','ALKA  BAGWAN','2022-12-13','OBC','','','ARIHANT NAGAR','6261266782','623','KG-I','A','18'],
      ['ANURAG','DAWAR','RAKESH DAWAR','REENA DAWAR','2022-01-10','ST','720792285761','318208255','BHERU MAHARAJ','9644244578','595','KG-I','A','19'],
      ['AVIRAJ','MAKWANA','RAVI  MAKWANA','RANJITA  MAKWANA','2021-10-03','ST','','','JAMBURDI HAPSI','9131853800','553','KG-I','A','20'],
      ['GAURANSH','SHARMA','SANDEEP  SHARMA','SONU SHARMA','2022-07-29','OBC','285395543902','','650 ARIHANT NAGAR','9826977916','616','KG-I','A','21'],
      ['HARSH','BUNDELA','RAM SINGH  BUNDELA','REENA BUNDELA','2022-05-08','','','','','','','KG-I','A','22'],
      ['HASHMIT','SARODE','SANJAY SINGH  SARODE','JYOTI   SARODE','2021-07-10','OBC','840690931859','321432322','MULTI NANOD','8319474087','566','KG-I','A','23'],
      ['HITANSH','MAKWANA','MITHUN  MAKWANA','KARISHMA  MAKWANA','2021-03-25','ST','703926493846','316717715','BUDHANIYA','9907445908','613','KG-I','A','24'],
      ['KRISH','KRISH','RAHUL','PRIYANKA','2020-05-29','','','','','','','KG-I','A','25'],
      ['MAHIR','BUNDELA','KRISHNA PRATAP SINGH','SEEMA RAJA BUNDELA','2022-09-23','','','','','9617374097','','KG-I','A','26'],
      ['NITYANSH','MOURY','RAHUL  MOURY','POOJA MOURY','2022-06-23','OBC','372668044516','317453276','JAMBURDI HAPSI','9165351013','513','KG-I','A','27'],
      ['PRITAM','CHOUHAN','SANJAY  CHOUHAN','POOJA CHOUHAN','2021-11-01','ST','997066269782','317864641','JAMBURDI HAPSI','6260189102','612','KG-I','A','28'],
      ['RIDHARV','TAYDE','SAGAR  TAYDE','DEEPIKA TAYDE','2022-03-21','SC','315183491068','319393740','809 GOMETESH CITY','7415551105','610','KG-I','A','29'],
      ['SAKSHAM','CHOUHAN','ANAND SINGH  CHOUHAN','SANGITA BAI  CHOUHAN','2022-07-16','OBC','','','780 ARIHANT NAGAR','8719957697','632','KG-I','A','30'],
      ['SHIVAY','DASHAYA','PRAVEEN  DASHAYA','HEENA DASHAYA','2022-03-01','OBC','','317864685','JAMBURDI HAPSI','7879686478','592','KG-I','A','31'],
      ['UJJAWAL','MAKWANA','AJAY  MAKWANA','BHARTI  MAKWANA','2021-08-02','ST','','317452145','BUDHANIYA','9098508574','597','KG-I','A','32'],
      ['BHAVYA','MAKWANA','VIMAL  MAKWANA','SAPNA  MAKWANA','2022-09-05','ST','','','BUDHANIYA','9111121707','641','KG-I','A','33'],
      ['AAVISHA','AAVISHA','AKASH','VAISHALI','2020-10-05','','','','','','','KG-II','A','1'],
      ['AAYUSHI','SHARMA','KAPIL SHARMA','ROSHNI SHARMA','2021-01-11','General','868122023331','319880800','ARIHANT NAGAR','9098513113','396','KG-II','A','2'],
      ['AYANSHI','SHARMA','SANDEEP SHARMA','NISHA SHARMA','2012-07-13','General','','319308126','ARIHANT NAGAR','9893186729','588','KG-II','A','3'],
      ['BHAGYASHRI','VERMA','JAYNARYAN VERMA','SONALI VERMA','2021-07-22','OBC','527361175152','322351447','ARIHANT NAGAR','6267412668','398','KG-II','A','4'],
      ['DIVYANSHI','VISHWKARMA','BALKRISHNA VISHWKARMA','RITU VISHWKARMA','2021-07-30','OBC','339418562284','','ARIHANT NAGAR','9826729179','401','KG-II','A','5'],
      ['DURGESHWARI','BHABAR','VIKAS BHABAR','ARCHANA BHABAR','2019-01-27','ST','350315533422','313161766','BUDHANIYA','8770105462','402','KG-II','A','6'],
      ['GREESHMI','VISHWKARMA','SOURABH VISHWKARMA','PAYAL VISHWKARMA','2021-10-15','','','','','','','KG-II','A','7'],
      ['HANISHKA','CHOUHAN','KESHAV CHOUHAN','PRIYANKA CHOUHAN','2021-02-24','OBC','647228058298','','','9238146045','614','KG-II','A','8'],
      ['HIMANGI','NAMDEV','CHANDAN NAMDEV','PINKEE NAMDEV','2020-06-23','OBC','','','ARIHANT NAGAR','7898406430','287','KG-II','A','9'],
      ['KRISHA','JALANDRA','PRAVEEN JALANDRA','SAPNA JALANDRA','2021-08-06','','','','','','','KG-II','A','10'],
      ['LOVEVANSHIKA','VERMA','RAHUL VERMA','POOJA VERMA','2020-05-07','','','','','','','KG-II','A','11'],
      ['MAHAK','YADAV','BHURELAL YADAVYADAV','PAPITA YADAV','2021-11-06','OBC','332080054101','321333361','ARIHANT NAGAR','8959793264','380','KG-II','A','12'],
      ['MAHI','HADE','VIKASH HADE','MALA HADE','2022-07-04','','','','','','','KG-II','A','13'],
      ['MISHTHI','DASHAYA','VIPIN DASHAYA','CHANDA DASHAYA','2020-10-29','OBC','213094583491','311504072','JAMBUDI HAPSI','9977798599','407','KG-II','A','14'],
      ['NIKITA','KUMAWAT','SHYAMLAL KUMAWATKUMAWAT','PUSHPA KUMAWAT','2021-03-06','OBC','557924609269','','ARIHANT NAGAR','9509787101','388','KG-II','A','15'],
      ['NITYANSHI','PURI','NARESH PURI','NEHA PURI','2020-11-19','OBC','668389447357','','ARIHANT NAGAR','9644460241','381','KG-II','A','16'],
      ['PURVI','NAMDEV','AMIT NAMDEV','DIPIKA NAMDEV','2021-06-18','OBC','373738585530','314031061','ARIHANT NAGAR','7898562486','569','KG-II','A','17'],
      ['RINKITA','DOLAI','DINESH DOLAI','KARUNA DOLAI','2021-05-18','SC','217159968615','','ARIHANT NAGAR','7489633362','411','KG-II','A','18'],
      ['SAMRIDDHI','RAJPUT','SURENDRA RAJPUT','KOUSHALIYA RAJPUT','2020-03-05','General','','','1296 ARIHANT NAGAR','9754039722','557','KG-II','A','19'],
      ['SHIKSHA','SASTE','NITESH SASTE','ROMA SASTE','2020-08-24','ST','202769468870','314563177','BHERU MAHARAJ','9977672610','618','KG-II','A','20'],
      ['SUCHITA','CHOUHAN','SHOBHARAM CHOUHAN','SADHANA CHOUHAN','2021-06-05','OBC','','','ARIHANT NAGAR','7773086076','428','KG-II','A','21'],
      ['TASVEEKA','VISHWAKARMA','LOKESH VISHWAKARMAVISHWAKARMA','POOJA VISHWAKARMA','2021-03-31','OBC','793072854425','','ARIHANT NAGAR','9575501611','429','KG-II','A','22'],
      ['VANDANA','GURJAR','DEVILAL GURJAR','SUSHILA GURJAR','2022-03-22','OBC','601893859536','315902556','GOMETESH CITY','9201828798','627','KG-II','A','23'],
      ['AARUSH','RATHORE','ROHIT RATHORE','DEEPIKA RATHORE','2021-11-30','OBC','','','ARIHANT NAGAR','7509334943','562','KG-II','A','24'],
      ['AAYUSH','LODHI','AVTAR LODHI','SUNITA LODHI','2021-09-14','OBC','','','ARIHANT NAGAR','9977380972','563','KG-II','A','25'],
      ['ABHISHEK','LOHAR','KAMLESH LOHAR','SANJU LOHAR','2021-03-15','OBC','','','ARIHANT NAGAR','9108778483','585','KG-II','A','26'],
      ['ADITYA','PATEL','PRAVEEN PATEL','CHHAYA PATEL','2020-06-18','OBC','749391082881','317924011','ARIHANT NAGAR','9755333030','379','KG-II','A','27'],
      ['ANUGRAH','RAJGON','MUKESH RAJGON','PRATIBHA RAJGON','2021-03-24','ST','980706152779','','BHERUMAHARAJ','8319146352','598','KG-II','A','28'],
      ['ARUSH','YADAV','ANIL YADAV','SUNITA YADAV','2021-06-23','OBC','837209811345','314541937','ARIHANT NAGAR','7415805565','384','KG-II','A','29'],
      ['AAYU','PANDEY','DHIRENDRA PANDEY','SURUCHI PANDEY','2021-01-28','General','665780846450','','ARIHANT NAGAR','6263479895','382','KG-II','A','30'],
      ['ANIKET','PATRA','ABHIJEET PATRA','RABINA PATRA','2021-01-17','General','284133027753','307462300','ARIHANT NAGAR','7470826593','397','KG-II','A','31'],
      ['AVYUKT','SHRIVASTAV','SANDEEP SHRIVASTAV','AYSHA SHRIVASTAV','2020-11-22','General','877981050838','','419 ARIHANT NAGAR','8103305615','636','KG-II','A','32'],
      ['BHAVESH','GURJAR','DINESHCHANDRA GURJARGURJAR','LEELA GURJAR','2020-11-17','OBC','645772794350','318585694','706 ARIHANT NAGAR','9399212033','600','KG-II','A','33'],
      ['DAKSH','SINGH THAKUR','ROHIT THAKUR','NISHA THAKUR','2019-05-01','General','233327912401','321334276','MULTI','9977651703','399','KG-II','A','34'],
      ['DIVYANSH','DHOLPURIYA','NARENDRA DHOLPURIYADHOLPURIYA','MANISHA DHOLPURIYA','2020-08-08','SC','447331339747','','JAMBUDI HAPSI','9752146140','400','KG-II','A','35'],
      ['JAYNDR','VASUNIYA','RAKESH VASUNIYA','HEMA VASUNIYA','2021-01-04','','','','','','','KG-II','A','36'],
      ['KHUSHIL','RAJPUT','KAMAL RAJPUT','MONIKA RAJPUT','2021-05-03','General','495673629204','314157096','ARIHANT NAGAR','9926720303','383','KG-II','A','37'],
      ['KRIYANSH','DHOLPURIYA','VIRENDRA  DHOLPURIYA DHOLPURIYA','URMILA DHOLPURIYA','2021-05-16','SC','499456452962','316293493','JAMBURDI HAPSI','8770563503','571','KG-II','A','38'],
      ['KUNDAN','CHOUHAN','SANJAY CHOUHAN','POOJA CHOUHAN','2017-02-07','SC','629911917378','304565622','JAMBURDI HAPSI','6260189102','404','KG-II','A','39'],
      ['PARTH','KUMAWAT','MANISH KUMAWAT','SEEMA KUMAWAT','2021-09-09','OBC','966483859390','','ARIHANT NAGAR','7000731856','377','KG-II','A','40'],
      ['PRANAV','SONGARA','SHUBHAM SONGARA','RANU SONGARA','2022-11-28','OBC','','','ARIHANT NAGAR','9826556634','415','KG-II','A','41'],
      ['RIYANSH','MAKWANA','RAHUL MAKWANA','REKHA MAKWANA','2020-04-06','SC','925894396597','318476597','JAMBURDI HAPSI','91317437896','423','KG-II','A','42'],
      ['SHIVANSH','BOYAT','AMIT BOYAT','REENA BOYAT','2021-01-17','SC','630862696827','321408333','MULTI','8817759434','426','KG-II','A','43'],
      ['SHIVANSH','RATHORE','INDAL SINGH RATHORE','SHALU RATHORE','2021-03-11','OBC','611927204831','320065837','954 ARIHANT NAGAR','7651845691','574','KG-II','A','44'],
      ['SHREYANSH','MOURY','SANDEEP MOURY','KRISHNA MOURY','2021-06-27','OBC','','','JAMBURDI HAPSI','9340099615','408','KG-II','A','45'],
      ['YUVRAJ','VERMA','KAPIL VERMA','SONAM VERMA','','','','','','','','KG-II','A','46'],
      ['AAROHI','PANCHO','SUDEEP PANCHO','DIPALI PANCHO','2020-06-23','OBC','877128365064','321215363','ARIHANT NAGAR','9617865857','315','1','A','1'],
      ['AARYA','SENGAR','SURAJ SENGAR','VINITA SENGAR','2021-01-05','General','','','ARIHANT NAGAR','8630911475','394','1','A','2'],
      ['ANAYSHA','DAWAR','MUKESH DAWAR','DURGA DAWAR','2019-12-06','','','','','','','1','A','3'],
      ['ANIKA','PANDEY','DHIRENDRA PANDEY','SURUCHI PANDEY','2019-12-24','General','780380624865','','ARIHANT NAGAR','6263479895','56','1','A','4'],
      ['ELINA','ELINA','SHEKHAR','SAPNA','2020-07-04','','','','','','','1','A','5'],
      ['ISHIKA','DHOLPURIYA','VIRENDRA','URMILA','2020-03-26','SC','777685591628','311330642','JAMBURDI HAPSI','8770563503','567','1','A','6'],
      ['JANVI','PARMAR','AKSHAY PARMAR','ARCHANA PARMAR','2020-07-06','SC','556975526903','323501292','ARIHANT NAGAR','7898069999','446','1','A','7'],
      ['JHUNJHUN','GURJAR','SURESH GURJAR','PUSHPA GURJAR','2020-05-18','OBC','352262063198','319985954','ARIHANT NAGAR','9131629687','52','1','A','8'],
      ['KANAK','GIRI','PANKAJ GIRI','MEENA GIRI','2019-03-14','OBC','','','ARIHANT NAGAR','9617812668','166','1','A','9'],
      ['MAHI','SOLANKI','SANJAY SOLANKI','TINA SOLANKI','2019-10-15','ST','610821488782','318584198','BUDHANIYA','7898575341','436','1','A','10'],
      ['NITYA','THORAT','DEEPAK THORAT','VAISHALI THORAT','2020-07-03','OBC','323130353299','321463887','ARIHANT NAGAR','6264178757','413','1','A','11'],
      ['PARI','PRAJAPATI','SONU PRAJAPATI','SEEMA PRAJAPATI','2020-11-05','','','','','','','1','A','12'],
      ['PIHU','DHANWARE','VIJAY DHANWARE','PINKI DHANWARE','2020-12-21','SC','549774085495','313275503','DEV DHARAM TANKI','9165912287','439','1','A','13'],
      ['PRISHA','SINGH','AVINASH SINGH','MEENU SINGH','2020-07-27','General','490171328161','314491604','ARIHANT NAGAR','9826063545','206','1','A','14'],
      ['PURVI','KOUSHAL','KAILASH KOUSHAL','KAVITA KOUSHAL','2020-11-11','OBC','','','ARIHANT NAGAR','9340401935','543','1','A','15'],
      ['RIDHIMA','PIROCHHA','SANI PIROCHHA','DIVYA PIROCHHA','2020-02-14','SC','703355321236','','MULTI','9993311509','35','1','A','16'],
      ['SHANVI','VISHWAKARMA','SOHAN LAL VISHWAKARMA','SURBHI VISHWAKARMA','2020-10-04','OBC','','320620227','ARIHANT NAGAR','9753878182','301','1','A','17'],
      ['SIDDHI','SHARMA','LAKHAN SHARMA','POONAM SHARMA','2020-08-16','General','','313548500','ARIHANT NAGAR','9630074421','337','1','A','18'],
      ['SUHANI','TIROLE','ASHOK TIROLE','MANJU TIROLE','2019-09-13','OBC','254822173766','322002148','GOMETESH','7987423142','126','1','A','19'],
      ['TRISHA','VISHWAKARMA','AASHISH VISHWAKARMA','JAYDEVI VISHWAKARMA','2020-12-12','OBC','726557468939','','ARIHANT NAGAR','9993698297','141','1','A','20'],
      ['VAANI','VISHWAKARAMA','DILIP VISHWAKARAMA','HEMLATA VISHWAKARAMA','2019-04-17','OBC','788366150133','','ARIHANT NAGAR','6232959371','440','1','A','21'],
      ['VAISHNAVI','SATHE','VISHAL SATHE','MANJU SATHE','2018-03-23','','','','','','','1','A','22'],
      ['YASHVI','NAMDEV','RAHUL NAMDEV','BHARTI NAMDEV','2019-02-06','OBC','300228301558','312960548','ARIHANT NAGAR','8269824068','318','1','A','23'],
      ['AYANSH','YADAV','ANIL YADAV','SUNITA YADAV','2020-03-31','OBC','566280284146','314841938','ARIHANT NAGAR','7415805565','231','1','A','24'],
      ['DEEP','CHAROLE','LANKESH CHAROLE','HEENA CHAROLE','2019-12-06','OBC','662546304403','320070967','ARIHANT NAGAR','9770083970','9','1','A','25'],
      ['DHRUV','MALVIYA','VINOD MALVIYA','VARSHA MALVIYA','2020-05-11','','','','','','','1','A','26'],
      ['HEMANT','UPADAYAY','ANIL UPADAYAY','RITU UPADAYAY','2020-12-05','General','469334594786','318669044','ARIHANT NAGAR','6263313365','103','1','A','27'],
      ['ISHAN','BAIRAGI','RAHUL BAIRAGI','SANDHYTA BAIRAGI','2020-05-22','OBC','429656115839','','ARIHANT NAGAR','7697989924','438','1','A','28'],
      ['JAY','CHAROLE','KAMLESH CHAROLE','MANJU CHAROLE','2017-08-29','OBC','826645553567','','ARIHANT NAGAR','7000961233','14','1','A','29'],
      ['KARTIK','NAMDEV','ASHISH NAMDEV','VANDANA NAMDEV','2020-04-27','OBC','855047658673','314058336','ARIHANT NAGAR','9993471675','568','1','A','30'],
      ['KARTIK','SONI','PREM SONI','BHAVNA SONI','2019-11-16','OBC','826154542548','314491531','ARIHANT NAGAR','9826054635','19','1','A','31'],
      ['KARTIK','SAHU','SHUBHAM SAHU','AASTHA SAHU','2020-03-04','','','','','','','1','A','32'],
      ['KARTIKEY','MISHRA','KRIPA SHANKAR MISHRA','KAVITA MISHRA','2019-09-25','General','200774749028','','ARIHANT NAGAR','7225961092','55','1','A','33'],
      ['LAVANSH','UPADHYAY','DEEPAK UPADHYAY','CHANCHAL UPADHYAY','2020-05-21','General','','','ARIHANT NAGAR','8871790807','300','1','A','34'],
      ['LAVESH','PIROCHHA','SANI PIROCHHA','DIVYA PIROCHHA','2019-01-15','SC','208549742987','','MULTI','9993311509','36','1','A','35'],
      ['NAITIK','KUMAWAT','MUKESH KUMAWAT','MANJU KUMAWAT','2020-05-08','OBC','','','ARIHANT NAGAR','6265744678','621','1','A','36'],
      ['NAKSH','CHOUHAN','KESHAV CHOUHAN','PRIYANKA CHOUHAN','2020-01-20','OBC','893975011458','','ARIHANT NAGAR','9238146045','606','1','A','37'],
      ['RAJVEER','BUNDELA','RAMSINGH BUNDELA','REENA BUNDELA','2020-02-17','General','648494602767','','ARIHANT NAGAR','8602875919','49','1','A','38'],
      ['SAJAN','SINGH RAJPUT','ARJUN SINGH RAJPUT','LAXMI RAJPUT','2020-04-24','General','','','ARIHANT NAGAR','9131422367','156','1','A','39'],
      ['VIHAN','CHOUHAN','SANDEEP CHOUHAN','JYOTI CHOUHAN','2020-03-15','OBC','441049193378','','ARIHANT NAGAR','9174498149','5','1','A','40'],
      ['YASH','MAKWANA','DINESH MAKWANA','POOJA MAKWANA','2019-10-19','ST','','','BUDHANIYA','7489267387','545','1','A','41'],
      ['YUVIT','LAGAS','MOHAN LAGAS','DIKSHA LAGAS','2020-04-12','OBC','612443974901','319321110','ARIHANT NAGAR','9685371245','258','1','A','42'],
      ['YUVRAJ','BHAVAR','RAKESH BHAVAR','LALITA BHAVAR','2018-07-12','ST','604763327811','322130656','ARIHANT NAGAR','9981615151','79','1','A','43'],
      ['AARADHYA','SOLANKI','RAHUL SOLANKI','SONU SOLANKI','2019-12-02','General','283074962282','311103480','ARIHANT NAGAR','9617310441','492','2','A','1'],
      ['ASTHA','PATEL','VIJAY PATEL','ARCHANA PATEL','2018-02-07','','','','','','','2','A','2'],
      ['CHAHAT','MISHRA','PUSHPENDRA MISHRA','LAXMI MISHRA','2019-10-24','General','','','SIDDARTH NAGAR','9993068867','510','2','A','3'],
      ['DEWANSHI','MAKWANA','SUNIL MAKWANA','POOJA MAKWANA','2019-04-05','ST','956026559247','313367472','BUDHANIYA','9685946330','509','2','A','4'],
      ['DISHA','SHARMA','JITENDRA SHARMA','CHETNA SHARMA','2019-01-12','General','','315387861','ARIHANT NAGAR','7224070518','203','2','A','5'],
      ['DIVANSHIKA','ALAVA','SANJAY ALAVA','REENA ALAVA','2018-09-24','ST','447633511503','321268924','BHERU MAHARAJ','8839665079','353','2','A','6'],
      ['DIVYANSHI','DASHAYA','PRAVIN DASHAYA','HEENA DASHAYA','2019-05-01','OBC','844526219911','315404036','JAMBUDI HAPSI','7879686478','359','2','A','7'],
      ['DIVYA','SUTHAR','DINESH CHANDRA SUTHAR','GEETA SUTHAR','2018-10-23','OBC','841983458983','','GOMTESH','9713152851','296','2','A','8'],
      ['DRASHIKA','MAKWANA','INDAR SINGH MAKWANA','REENA MAKWANA','2018-08-29','ST','','316717681','BUDHANIYA','8450804441','517','2','A','9'],
      ['HIMANSHI','CHANDEL','RAHUL CHANDEL','KAJAL CHANDEL','2018-12-25','ST','880835953189','314238694','','9770956055','615','2','A','10'],
      ['HITANSHI','TIWARI','GAURAV TIWARI','KAVITA TIWARI','2019-05-10','General','682298516072','319891271','SIDDARTH NAGAR','7999108479','554','2','A','11'],
      ['KANAK','SAVNER','UTTAM SINGH SAVNER','PRIYA SAVNER','2020-07-19','General','','313508283','ARIHANT NAGAR','6265671821','514','2','A','12'],
      ['KHUSHI','WANKHADE','NITIN WANKHADE','MEGHA WANKHADE','2019-02-10','OBC','796685963164','','MULTI','9111475905','459','2','A','13'],
      ['MAHAK','CHOUHAN','SACHIN CHOUHAN','HEENA CHOUHAN','2017-12-09','OBC','673796299916','305677241','ARIHANT NAGAR','9753666716','214','2','A','14'],
      ['MOUSUMI','DOLAI','GOUTAM DOLAI','REKHA DOLAI','2018-12-07','SC','488034306213','321460491','1292 ARIHANT NAGAR','9111833486','531','2','A','15'],
      ['MINI','RAJPUT','RAHUL RAJPUT','RAMA RAJPUT','2018-10-06','General','329365469875','314106803','DHARAM TAKERI','7080881299','169','2','A','16'],
      ['PALAK','SASTE','NARESH SASTE','MANJU SASTE','2019-03-20','ST','223654407742','310141711','BHERU MAHARAJ','7805060572','303','2','A','17'],
      ['PRAKRUTI','MAKWANA','KAILASH MAKWANA','NEHA MAKWANA','2018-09-12','ST','203073241358','315153665','BUDHANIYA','9340198005','461','2','A','18'],
      ['PURVI','BHURIYA','ROHIT','SEEMA','','','','','','','','2','A','19'],
      ['RADHIKA','PANCHAL','BHARAT PANCHAL','KRASHNA BAI PANCHAL','2018-08-17','OBC','856911692750','313225196','JAMBUDI HAPSI','9977131128','593','2','A','20'],
      ['ROSHNI','PARMAR','RAJESH PARMAR','REKHA PARMAR','2019-04-20','OBC','704049936956','310201195','ARIHANT NAGAR','8982397833','414','2','A','21'],
      ['SANSKRITI','RAJPUT','SURENDRA RAJPUT','KOUSHILYA RAJPUT','2020-03-05','General','560880011829','','ARIHANT NAGAR','9754039722','165','2','A','22'],
      ['YAMINI','PATEL','GANESH PATEL','SAVITA PATEL','2019-10-31','OBC','334673578049','','ARIHANT NAGAR','9977886204','302','2','A','23'],
      ['AARAV','CHOUHAN','DILIP CHOUHAN','LAXMI CHOUHAN','2019-06-29','OBC','772059607404','','GOMTESH','8224040891','70','2','A','24'],
      ['AAYUSH','SHARMA','KAPIL SHARMA','ROSHNI SHARMA','2019-06-09','General','760389176953','319880807','ARIHANT NAGAR','9098513113','37','2','A','25'],
      ['ABHINANDAN','PAWAR','KAMAL PAWAR','JYOTI  PAWAR','','OBC','','','SIDDARTH NAGAR','8889090223','362','2','A','26'],
      ['ANIVESH','PRAJAPAT','VINOD PRAJAPAT','JYOTI PRAJAPAT','2020-05-03','OBC','713673194033','321414049','ARIHANT NAGAR','8109955051','389','2','A','27'],
      ['ANSH','LODHI','AVTAR LODHI','SUNITA LODHI','2019-03-17','OBC','','318869519','ARIHANT NAGAR','9977380972','159','2','A','28'],
      ['AYAN','BHURIYA','DILIP SINGH BHURIYA','REENA BHURIYA','2019-08-19','ST','628103080240','319880807','BHERU MAHARAJ','8770741448','308','2','A','29'],
      ['ANURAG','SAMANTA','SANDEEP SAMANTA','KRISHNA SAMANTA','2018-04-05','General','491227703839','','ARIHANT NAGAR','8839812633','347','2','A','30'],
      ['BHAVYA','YADAV','KRISHNA YADAV','VANDANA YADAV','2019-10-07','OBC','918204456200','315041457','1242/2 GOMETESH CITY','8818812230','539','2','A','31'],
      ['DEVANSH','MOURYA','RAVI  MOURYA','SADHNA  MOURYA','2019-05-30','OBC','607150413250','311003038','JAMBUDI HAPSI','9926861878','168','2','A','32'],
      ['ESHAN','VISHWAKRMA','DEVRAM VISHWAKRMA','SHIVANI VISHWAKRMA','2019-02-13','OBC','458271569607','','ARIHANT NAGAR','7879993611','215','2','A','33'],
      ['GORANSH','SANWANE','DEEPAK SANWANE','UMA SANWANE','2016-12-05','SC','999783090630','310266018','JAMBUDI HAPSI','8103088459','360','2','A','34'],
      ['KARTIK','CHOUHAN','SHOBHARAM CHOUHAN','SADHANA CHOUHAN','2019-02-13','ST','841726995236','318344252','ARIHANT NAGAR','7773086076','239','2','A','35'],
      ['KRATGYA','KRATGYA','RAKESH','VINITA','2018-10-02','','','','','','','2','A','36'],
      ['KRISH','LUHAR','LAXMAN','BANTI','2019-08-09','','698153194966','320294359','','','','2','A','37'],
      ['KRISHNA','ROYAL','ANIL ROYAL','AARTI ROYAL','2018-09-03','OBC','337815063335','320650813','ARIHANT NAGAR','7828124421','75','2','A','38'],
      ['NEERAJ','GURJAR','DINESH CHANDRA GURJARGURJAR','LEELAGURJAR','2018-02-03','OBC','991498813511','318585693','706 ARIHANT NAGAR','9399212033','599','2','A','39'],
      ['NIDHIR','GIRI GOSWAMI','CHANDRESH GIRI GOSWAMI','MANISHA GIRI GOSWAMI','2019-08-09','OBC','327670898046','322595334','ARIHANT NAGAR','9826239413','630','2','A','40'],
      ['NITYANSH','MEENA','SANTOSH MEENA','TEENA MEENA','2019-04-22','OBC','532747326705','','ARIHANT NAGAR','9977817116','125','2','A','41'],
      ['NAITIK','SASTE','NITESH SASTE','RUMAN SASTE','2019-04-12','ST','615797409912','','BHERU MAHARAJ','9977672610','257','2','A','42'],
      ['PRADHYUMAN','PRADHYUMAN','YOGENDRA','','2017-11-15','','','','','','','2','A','43'],
      ['PARTH','BHATIYA','PANKAJ BHATIYA','MAMTA BHATIYA','2018-07-19','OBC','371439212824','','ARIHANT NAGAR','7987182352','119','2','A','44'],
      ['RAJ','PURI','SUNDAR PURI','BHAGVTI','2019-08-15','','','','','','','2','A','45'],
      ['ROCKY','VASUNIYA','RAKESH','HEMA','','','','','','','','2','A','46'],
      ['TANMAY','SASTE','VINOD SASTE','MANISHA SASTE','2017-11-30','ST','827191318707','309832424','BHERU MAHARAJ','9399770026','256','2','A','47'],
      ['VIHAN','SAHU','OMPRAKASH SAHU','NEHA SAHU','2018-10-01','OBC','489396331095','314761799','ARIHANT NAGAR','8819041075','442','2','A','48'],
      ['YASH','BUNDELA','KRISHNA BUNDELA','SEEMA BUNDELA','2019-05-10','General','359710484331','314993473','ARIHANT NAGAR','9617374097','48','2','A','49'],
      ['ADITI','TOMAR','SONU TOMAR','SNEHLATA TOMAR','2018-03-16','General','638206223859','310056339','410 SIDDARTH NAGAR','7024661942','273','3','A','S. No.'],
      ['ANUSHKA','NAMDEV','CHANDAN NAMDEV','PINKEE NAMDEV','2017-03-31','OBC','','','ARIHANT NAGAR','7898409430','286','3','A','2'],
      ['AVANI','AASKAR','RAHUL AASKAR','LALITA  AASKAR','2018-08-06','OBC','366067353390','','ARIHANT NAGAR','9755940530','507','3','A','3'],
      ['AVISHKA','GOUD','RAJESH GOUD','NISHA GOUD','2017-10-08','','','','','','','3','A','4'],
      ['DISHA','DHANAWAT','DEEPAK DHANAWAT','RAVINA DHANAWAT','2017-07-10','OBC','558882428070','320785511','ARIHANT NAGAR','8818883822','349','3','A','5'],
      ['DIVYANSHI','BADOLE','SUNIL BADOLE','BHAVNA BADOLE','2017-10-06','SC','457082813339','305777599','955 ARIHANT NAGAR','9479972199','537','3','A','6'],
      ['HARSHITA','GOSWAMI','SUNDAR GOSWAMI','BHAGVATI GOSWAMI','1027-12-07','OBC','592195328772','308000591','','8839483094','','3','A','7'],
      ['HIMANSHI','VERMA','RAHUL VERMA','POOJA VERMA','2017-09-15','OBC','','311046684','JAMBUDI HAPSI','9399421998','505','3','A','8'],
      ['HITANSHI','YADAV','BHURELAL YADAV','PAPITA YADAV','2018-10-21','OBC','','','ARIHANT NAGAR','8959793264','182','3','A','9'],
      ['ISHVI','ACHARYA','RAGHVENDRA ACHARYA','SHWETA ACHARYA','2018-11-04','General','381367891279','321560256','ARIHANT NAGAR','8962466087','201','3','A','10'],
      ['JAHNAVI','LOHAR','KAMLESH LOHAR','SANJU LOHAR','2018-03-19','OBC','760476804901','','ARIHANT NAGAR','9108778483','490','3','A','11'],
      ['JIYA','DUOD','BHURELAL DUOD','MANISHA DUOD','2017-06-30','OBC','','309490396','SIDDARTH NAGAR','9303636110','624','3','A','12'],
      ['KHUSHI','KUMAWAT','SHYAMLAL KUMAWAT','PUSHPA KUMAWAT','2016-11-06','OBC','725244858839','305777698','ARIHANT NAGAR','9630189761','387','3','A','13'],
      ['PARI','RAYAL','ANIL RAYAL','ARTI RAYAL','2017-07-01','OBC','663777118213','320650814','ARIHANT NAGAR','7828124421','76','3','A','14'],
      ['PARIDHI','DHANWARE','VIJAY SINGH DHANWARE','PINKI DHANWARE','2018-09-26','SC','979271735585','313275518','DEV DHARAM TANKI','8965001834','472','3','A','15'],
      ['PIHU','RAYAL','ANIL RAYAL','ARTI RAYAL','2017-07-01','OBC','640873780443','320650815','ARIHANT NAGAR','7828124421','74','3','A','16'],
      ['PRIYANSHI','DHOLPURIYA','NARENDRA DHOLPURIYA','MANISHA DHOLPURIYA','2017-07-29','SC','774069962713','304777565','JAMBUDI HAPSI','9752146140','342','3','A','17'],
      ['RAJVI','MISHRA','RAJESH MISHRA','TANNU MISHRA','2017-11-01','General','359236644433','314411946','ARIHANT NAGAR','9399284749','188','3','A','18'],
      ['TRAPTI','SAHU','OMPRAKASH SAHU','NEHA SAHU','2017-09-23','OBC','776959819421','307676554','GOMETESH CITY','8819041075','469','3','A','19'],
      ['VEDIKA','HADE','VIKASH HADE','MALA HADE','2017-03-06','','','','','','','3','A','20'],
      ['AARAV','GOUR','RAKESH GOUR','ARCHANA GOUR','2018-08-08','OBC','568830127179','312152972','','','319','3','A','21'],
      ['ANMOL','RAO','LOKESH RAO','PUJA RAO','2016-01-17','OBC','408023320975','302706740','ARIHANT NAGAR','7999822326','478','3','A','22'],
      ['BHAVYANSH','MAKWANA','SANTOSH MAKWANA','RACHNA MAKWANA','2017-09-01','SC','754420767778','315153664','BUDHANIYA','9754261530','431','3','A','23'],
      ['DIVYANSH','DHANAWAT','PANKAJ DHANAWAT','AARTI DHANAWAT','2017-10-23','OBC','941724378314','320785510','ARIHANT NAGAR','8818883822','348','3','A','24'],
      ['DIVYANSH','DIVYANSH','DEVENDRA','JOYANTI','1019-07-23','','','','','','','3','A','25'],
      ['GOUTAM','MAKWANA','AJAY MAKWANA','BHARTI MAKWANA','2018-11-16','ST','','317452146','BUDHANIYA','9098508574','596','3','A','26'],
      ['KUNAL','BABESKAR','VINOD BABESKAR','KIRAN BABESKAR','2016-12-14','OBC','627120395366','316133801','BHERU MAHARAJ','8085999278','485','3','A','27'],
      ['NAKSH','DHOLPURE','ARJUN DHOLPURE','MUSKAN DHOLPURE','2018-05-30','SC','312903736575','','MULTI','9370067593','38','3','A','28'],
      ['RANVEER','MAKWANA','SUNEEL  MAKWANA','POOJA  MAKWANA','2016-11-27','ST','590217056985','306563894','BUDHANIYA','9685946330','502','3','A','29'],
      ['RANVEER','SINGH','ROHIT SINGH','NISHA SINGH','2017-04-13','General','972726903785','312237446','MULTI','9977651703','470','3','A','30'],
      ['RUDRAKSH','SHARMA','RAHUL SHARMA','SONALI SHARMA','2018-12-21','General','579299665706','','ARIHANT NAGAR','8458889062','542','3','A','31'],
      ['VANSH','KUSHWAH','BABULAL  KUSHWAH','KAUSHALIYA  KUSHWAH','2018-10-11','OBC','','315114272','ARIHANT NAGAR','7987752065','17','3','A','32'],
      ['VEDANSH','MEENA','GULSHAN MEENA','POOJA MEENA','2017-07-01','OBC','663777118213','320650814','ARIHANT NAGAR','8349298412','191','3','A','33'],
      ['AAROHI','RAJPUT','JITENDRA RAJPUT','DEEKSHA RAJPUT','2018-01-17','General','424013844787','314305323','1277 ARIHANT NAGAR','8770568576','601','4','A','1'],
      ['BHAKTI','TONGARA','NILESH TONGARA','REKHA TONGARA','2017-09-05','General','729241757808','316277657','ARIHANT NAGAR','9630074421','464','4','A','2'],
      ['DIPANSI','DIPANSI','VIJAY','ARCHANA','2016-03-30','','','','','','','4','A','3'],
      ['DISHA','RAGHUVANSHI','RAHUL RAGHUVANSHI','RANU RAGHUVANSHI','2017-08-06','General','','307462227','ARIHANT NAGAR','9754873230','324','4','A','4'],
      ['DIVYANSHI','MOURYA','RAVI MOURYA','SADHNA MOURYA','2017-02-25','OBC','304858256484','311003033','JAMBUDI HAPSI','9926861878','167','4','A','5'],
      ['JIYA','LODHI','SANTOSH LODHI','SOMA LODHI','2018-10-04','OBC','414466718783','318996351','ARIHANT NAGAR','8109778761','340','4','A','6'],
      ['NAVYA','JAIN','RUPESH JAIN','RADHIKA JAIN','2019-05-18','General','602730785785','','ARIHANT NAGAR','8319482678','216','4','A','7'],
      ['PARTHI','PANCHAL','JITENDRA PANCHAL','AARTI PANCHAL','2018-04-27','OBC','','','1270 ARIHANT NAGAR','7879267976','540','4','A','8'],
      ['POORNIMA','DANGI','PRABHAN SINGH DANGI','KAMNI  DANGI','2018-09-24','General','525667541682','318961431','ARIHANT NAGAR','9691237678','174','4','A','9'],
      ['PURVI','CHAROLE','LANKESH CHAROLE','HEENA CHAROLE','2016-06-17','OBC','635287326971','305669749','ARIHANT NAGAR','9770083970','10','4','A','10'],
      ['RAKHI','DANGI','PRABHAN SINGH DANGI','KAMNI DANGI','2017-02-26','General','405374026608','318961438','ARIHANT NAGAR','9691237678','170','4','A','11'],
      ['RASHMI','GOSWAMI','NILESH GOSWAMI','PINKI  GOSWAMI','2016-12-30','OBC','560739851233','314281006','ARIHANT NAGAR','6263537629','500','4','A','12'],
      ['ROSHNI','GIRI','NILEESH GIRI','PINKI  GIRI','2016-12-30','','','','','','','4','A','13'],
      ['SRUSHTI','SOLANKI','RAHUL SOLANKI','SONU SOLANKI','2017-06-04','General','436150285825','307462031','ARIHANT NAGAR','9617310441','496','4','A','14'],
      ['SWARA','ACHARYA','RAGHVENDRA  ACHARYA','SHWETA ACHARYA','2016-03-25','General','553533640660','310592218','ARIHANT NAGAR','8962466087','202','4','A','15'],
      ['SWATI','SONGARA','SHUBHAM SONGARA','RANU SONGARA','2017-07-02','OBC','794272121531','313382665','ARIHANT NAGAR','9826556634','197','4','A','16'],
      ['VAIDEHI','RAJPUT','PINTU RAJPUT','NEHA RAJPUT','2017-12-30','General','502708416275','314145648','ARIHANT NAGAR','8085776161','248','4','A','17'],
      ['VANSHIKA','SOLANKI','RAVI SOLANKI','MANISHA SOLANKI','2016-10-19','OBC','','','','','','4','A','18'],
      ['ABHIMANYU','LODHI','GHANSHYAM LODHI','SAPNA LODHI','2016-09-25','OBC','214005261664','313067883','GOMETESH CITY','7724801033','463','4','A','19'],
      ['ADITY','SAUNER','DEEPAK SAUNER','MANJU SAUNER','2016-07-05','General','886725263550','305439304','ARIHANT NAGAR','9179023238','22','4','A','20'],
      ['ANSH','PATEL','AANAND PATEL','SAPNA PATEL','2016-06-02','OBC','','','ARIHANT NAGAR','6390479074','259','4','A','21'],
      ['AZAD','AHIRWAL','RAJKUMAR AHIRWAL','GUDDI BAI AHIRWAL','2017-08-15','OBC','297596338597','','ARIHANT NAGAR','6266651517','86','4','A','22'],
      ['BHUWAN','SINGH MEVADA','MANGAL MEWADA','POOJA MEWADA','2014-11-08','OBC','512198418955','301063206','ARIHANT NAGAR','9669655270','622','4','A','23'],
      ['GANESH','KHARADIYA','SHEKHAR KHARADIYA','LAXMI KHARADIYA','2015-12-16','','','','','','','4','A','24'],
      ['KUSH','GIRI GOSWAMI','AAKASH GIRI GOSWAMI','RANI GIRI GOSWAMI','2017-08-08','OBC','443098981952','306019038','ARIHANT NAGAR','9981543436','330','4','A','25'],
      ['LAKSHYA','YADAV','KRISHNA YADAV','VANDANA YADAV','2017-12-28','OBC','404819785092','315041456','1242/2 GOMETESHCITY','8818812230','538','4','A','26'],
      ['LOVE','GIRI GOSWAMI','AAKASH GIRI GOSWAMI','RANI GIRI GOSWAMI','2017-08-08','OBC','963818807650','306019037','ARIHANT NAGAR','9981543436','329','4','A','27'],
      ['PIYUSH','PANWAR','KALYANSINGH  PANWAR','SANGEETA  BAI PANWAR','2015-10-30','OBC','','','ARIHANT NAGAR','7415854997','352','4','A','28'],
      ['PRATHMESH','PAWAR','ROHIT PAWAR','KOMAL PAWAR','2018-03-05','OBC','732158231338','312544871','ARIHANT NAGAR','7028325602','200','4','A','29'],
      ['AMBIKA','RATHORE','INDAL SINGH RATHORE','SHALU RATHORE','2015-08-10','OBC','643019953757','320065835','ARIHANT NAGAR','7651845691','225','5','A','1'],
      ['ANJALI','VERMA','ARJUN VERMA','REENA VERMA','','','','','','9770987006','','5','A','2'],
      ['DHARA','PARMAR','AKSHAY PARMAR','ARCHANA PARMAR','2016-03-05','SC','801740183218','313638544','ARIHANT NAGAR','7898069999','171','5','A','3'],
      ['HARLEEN','JHALA','SHAILENDRA JHALA','AAYUSHI  JHALA','2016-12-16','General','470541402555','316261212','ARIHANT NAGAR','9617591403','445','5','A','4'],
      ['KANAK','SAWNER','ASHISH SAWNER','NEMIKASAWNER','2015-02-10','SC','757870707861','304855703','1292 GOMETESH','9826880335','561','5','A','5'],
      ['KHUSHI','MEVADA','MANGAL MEVADA','POOJA MEWADA','2013-06-11','OBC','359647898668','301063329','ARIHANT NAGAR','9669655270','620','5','A','6'],
      ['MAHIMA','RAJPUT','KAMAL RAJPUT','MONIKA  RAJPUT','2016-01-26','General','705855752071','304932234','ARIHANT NAGAR','9926720303','253','5','A','7'],
      ['MANASVI','MANASVI','DEVENDRA','JOYANTI','2017-06-28','','','','','','','5','A','8'],
      ['NAVYA','MISHRA','PUSHPENDRA  MISHRA','LAXMI  MISHRA','2017-09-25','General','978688412536','323402432','SIDDARTH NAGAR','9993068867','23','5','A','9'],
      ['RISHIKA','GURJAR','GANESH GURJAR','DURGA GURJAR','2015-09-18','OBC','738223907963','304046361','GOMETESH CITY','9893441035','549','5','A','10'],
      ['SIMRAN','GAUD','ANKIT GAUD','SAPNA GAUD','2016-02-01','OBC','887370093884','310612724','JAMBUDI HAPSI','9907276925','519','5','A','11'],
      ['TANU','SINGH','ANOOP SINGH','ARCHNA SINGH','2017-07-16','General','831721437416','323918703','ARIHANT NAGAR','9336268356','2','5','A','12'],
      ['ADITYA','SASTE','NARESH SASTE','MANJU  SASTE','2016-04-14','ST','295359128570','310141709','BHERU MAHARAJ','6260854363','617','5','A','13'],
      ['AELEX','BHURIYA','DEELIP BHURIYA','REENA BHURIYA','2017-01-20','ST','809745414844','','BHERU MAHARAJ','8770741448','586','5','A','14'],
      ['CHITRANSH','YADAV','GOVIND YADAV','MONIKA  YADAV','2016-09-18','OBC','357892138906','314855704','ARIHANT NAGAR','6265987652','105','5','A','15'],
      ['KARTIK','SASTE','SURESH SASTE','TARABAI SASTE','2013-03-13','ST','461334526150','164033018','BHERU MAHARAJ','9977230372','589','5','A','16'],
      ['MANGAL','MAKWANA','JITENDRA  MAKWANA','AASHA  MAKWANA','2016-02-09','ST','932627016104','306563861','BUDHANIYA','9589715152','524','5','A','17'],
      ['MOHIT','CHOUHAN','YOGESH  CHOUHAN','PINKY  CHOUHAN','2015-08-04','OBC','310480287046','306243821','SIDDARTH NAGAR','9826720906','457','5','A','18'],
      ['PUSHPENDRA','RAJPUT','PREMNARAYAN RAJPUT','MADHURI RAJPUT','2016-03-24','General','306612077815','311983381','407 RISHI NAGAR','7974633200','541','5','A','19'],
      ['RISHABH','RANAVAT','JITENDRA SINGH RANAVAT','VARSHA RANAVAT','2016-05-25','OBC','499001038925','312574355','405 ARIHANT NAGAR','8815270582','587','5','A','20'],
      ['RISHI','CHAROLE','KAMLESH  CHAROLE','MANJU CHAROLE','2015-05-31','OBC','653508861363','304134724','ARIHANT NAGAR','7000961233','13','5','A','21'],
      ['RISHIRAJ','DHANAWAT','PANKAJ  DHANAWAT','AARTI  DHANAWAT','2016-04-01','OBC','780929680555','320785509','ARIHANT NAGAR','8818883822','504','5','A','22'],
      ['ROHAN','BADOLE','SUNIL BADOLE','BHAVNA BADOLE','2016-03-26','SC','601968190288','301426973','955 ARIHANT NAGAR','9479972199','536','5','A','23'],
      ['SHIVM','VASUNIYA','ANAND VASUNIYA','SAVITRI BAI VASUNIYA','2014-03-01','ST','597362800909','200406021','BHERU MAHARAJ','8120771556','633','5','A','24'],
      ['TANISH','MAKWANA','KAILASH MAKWANA','NEHA  MAKWANA','2016-05-16','ST','236547056285','305103358','JAMBURDI HAPSI','9340198005','489','5','A','25'],
      ['VIDYANSH','MOURY','LAKHAN MOURY','BABITA  MOURY','2016-08-06','OBC','374686842372','','JAMBUDI HAPSI','9826687533','338','5','A','26'],
      ['VIVEK','RATHORE','BHAGWAN  RATHORE','SEEMA  RATHORE','2015-10-30','OBC','999364469334','304602930','ARIHANT NAGAR','9340715204','219','5','A','27'],
      ['YASH','CHAOUHAN','SACHIN  CHOUHAN','HEENA  CHOUHAN','2015-07-01','OBC','482231896625','305677240','ARIHANT NAGAR','9753666716','227','5','A','28'],
      ['YASH','JAIN','RUPESH JAIN','RADHIKA JAIN','2016-08-14','General','602730785785','315372711','ARIHANT NAGAR','8319482678','217','5','A','29'],
      ['YASHRAJ','KHARAWALIYA','PREM  KHARAWALIYA','JIMEE  KHARAWALIYA','2016-04-26','General','908077594204','303268018','SIDDARTH NAGAR','9098519041','512','5','A','30'],
      ['YUVRAJ','JAISWAL','MILAN  JAISWAL','KAVITA JAISWAL','2017-02-11','OBC','468802132104','321476985','GOMTESH','9630802527','45','5','A','31'],
      ['AAROHI','MAKWANA','DINESH  MAKWANA','MANISHA MAKWANA','2016-05-17','ST','350297665154','308847926','JAMBURDI HAPSI','7489267387','520','6','A','1'],
      ['ANMOL','SONGARA','SHUBHAM  SONGARA','RANU   SONGARA','2015-05-09','OBC','349514762469','313382663','ARIHANT NAGAR','9826556634','196','6','A','2'],
      ['AVIKA','GUND','SANJAY   GUND','SEEMA  GUND','2014-01-13','OBC','867745047926','200569059','ARIHANT NAGAR','8269866216','434','6','A','3'],
      ['BHAVIKA','RAGHUWANSHI','SACHIN RAGHUWANSHI','ANJALI  RAGHUWANSHI','2014-07-12','General','752209779448','198732108','ARIHANT NAGAR','9669690892','33','6','A','4'],
      ['DEVIKA','CHAROLE','LANKESH  CHAROLE','HINA  CHAROLE','2014-09-27','OBC','455367795618','305669748','ARIHANT NAGAR','9770083970','12','6','A','5'],
      ['DIVYANSHI','LODHI','SHIVRAJ SINGH LODHI','MEENA  LODHI','2015-05-15','OBC','854523965141','300713934','ARIHANT NAGAR','8871089885','378','6','A','6'],
      ['HARSHITA','PRAJAPAT','MUKESH PRAJAPAT','RANI  PRAJAPAT','2015-01-07','OBC','451326131051','308177830','1297 GOMTESH CITY','8889990872','556','6','A','7'],
      ['ISHIKA','MAKWANA','INDER SINGH  MAKWANA','REENA MAKWANA','2013-11-15','ST','710271456699','304251565','BUDHANIYA','8450804441','521','6','A','8'],
      ['KHUSHI','RAJPUT','ARJUN SINGH  RAJPUT','LAXMI RAJPUT','2016-05-04','OBC','308433676808','323918689','ARIHANT NAGAR','9131422367','157','6','A','9'],
      ['MAHAK','MISHRA','PUSHPENDRA  MISHRA','LAXMI  MISHRA','2016-02-22','General','303104981594','323402431','SIDDARTH NAGAR','9993068867','24','6','A','10'],
      ['MAHI','VERMA','KAPIL  VERMA','SONAM  VERMA','2015-02-06','SC','217792503693','161105273','ARIHANT NAGAR','7440702391','108','6','A','11'],
      ['PUNAM','CHANDEL','DINESH CHANDEL','SAPNA CHANDEL','2015-04-03','OBC','555230669616','315206656','JAMBUDI HAPSI','9926861878','164','6','A','12'],
      ['SANCHI','DEVDA','MAHENDRA DEVDA','SONU DEVDA','2013-08-05','ST','216618772520','308210925','ARIHANT NAGAR','9303078438','244','6','A','13'],
      ['SWETA','SINGH','ANOOP SINGH','ARCHANA SINGH','2015-09-15','General','863377773984','323918702','ARIHANT NAGAR','9336268356','1','6','A','14'],
      ['TANVI','VERMA','RAHUL VERMA','POOJA  VERMA','2015-12-09','OBC','453334704327','311046685','JAMBUDI HAPSI','9399421998','368','6','A','15'],
      ['VANSHIKA','CHOUHAN','JANU  CHOUHAN','GAYTREE  CHOUHAN','2014-01-05','OBC','571545676318','197660446','ARIHANT NAGAR','8889159922','548','6','A','16'],
      ['ANIKET','KHADA','DIPANKAR KHADA','LAXMI  KHADA','2016-01-22','General','952531335086','307462300','ARIHANT NAGAR','9098023192','533','6','A','17'],
      ['ASHVIK','LODHI','GHANSHYAM  LODHI','SAPNA  LODHI','2014-06-29','OBC','290662862714','304658434','GOMETESH CITY','7724801033','529','6','A','18'],
      ['DANISH','MOTIYANI','RAJKUMAR  MOTIYANI','SIMRAN  MOTIYANI','2015-07-08','General','425267408115','305975500','SIDDARTH NAGAR','9424534417','369','6','A','19'],
      ['JAY','DOUD','BHURALAL DOUD','MANISHA DOUD','2013-10-12','OBC','','301091850','SIDDARTH NAGAR','9303636110','625','6','A','20'],
      ['KHEMCHAND','KEWAT','LAXMAN  KEWAT','LALITA KEWAT','2016-05-31','OBC','758553387954','199980132','SUKSANTOSH','8085497329','178','6','A','21'],
      ['LAKKY','PAWAR','MADHUKAR','ANITA','2016-01-17','','','','','','','6','A','22'],
      ['MAHENDRA','GURJAR','LALARAM GURJAR','LAXMIBAI GURJAR','','','','','','','','6','A','23'],
      ['PRATIK','YADAV','RADHESHYAM  YADAV','BHARTI  YADAV','2015-04-08','OBC','863377773984','302993375','ARIHANT NAGAR','9754418178','275','6','A','24'],
      ['PRIYANK','SINGH SOLANKI','SOHAN SINGH  SOLANKI','PINKY  SOLANKI','2014-07-05','General','522055500900','190009180','ARIHANT NAGAR','8120655506','92','6','A','25'],
      ['RAVI','AHIRWAL','RAJKUMAR  AHIRWAL','GUDDI BAI  AHIRWAL','2015-07-27','OBC','992409875539','320783910','ARIHANT NAGAR','6266651517','85','6','A','26'],
      ['SAMARTH','SOLANKI','MUNSHI SOLANKI','SUDARSHANA SOLANKI','2014-06-26','OBC','802271437627','323903343','JAMBURDI HAPSI','7773891321','576','6','A','27'],
      ['VIRAJ','CHOUHAN','NILESH CHOUHAN','CHETANA  CHOUHAN','2013-10-02','OBC','280265765717','323766943','SIDDARTH NAGAR','7999901282','522','6','A','28'],
      ['AKANSA','LODHI','GHANSHYAM LODHI','SAPNA LODHI','2012-12-18','OBC','315879424658','301380112','GOMETESH CITY','7724801033','417','7','A','1'],
      ['ANGEL','AASKAR','RAHUL AASKAR','LALITA AASKAR','2014-02-14','OBC','471721264056','301352642','ARIHANT NAGAR','9755940530','416','7','A','2'],
      ['ANMOL','DASHAYA','PRAVEEN DASHAYA','HEENA  DASHAYA','2013-09-26','OBC','868555225375','306895088','JAMBUDI HAPSI','7879686478','371','7','A','3'],
      ['AYUSHI','CHOUHAN','NILESH  CHOUHAN','CHETNA  CHOUHAN','2011-11-29','OBC','947391973014','321770482','SIDDARTH NAGAR','7999901282','421','7','A','4'],
      ['HAVIKA','RATHORE','BHAGWAN RATHORE','SMEETA RATHORE','2012-06-22','OBC','593660364344','162321599','ARIHANT NAGAR','9340715204','218','7','A','5'],
      ['LAKSHMI','MALVIYA','RAJESH MALVIYA','PINKI MALVIYA','2015-04-14','OBC','927200535312','306443221','ARIHANT NAGAR','7974013414','276','7','A','6'],
      ['NISHA','PARMAR','RAM PRASAD PARMAR','KOMAL PARMAR','2014-09-02','OBC','576935540145','307505642','SIDDARTH NAGAR','8889583246','418','7','A','7'],
      ['PALAK','MAKWANA','CHHAGANLAL MAKWANA','SANGEETA MAKWANA','2014-04-19','OBC','238409574655','302587882','BUDHANIYA','8827389338','272','7','A','8'],
      ['PARI','CHAROLE','LANKESH CHAROLE','HEENA CHAROLE','2012-11-18','OBC','591632568827','305669747','ARIHANT NAGAR','9770083970','11','7','A','9'],
      ['PRACHI','CHAROLE','KAMLESH CHAROLE','MANJU CHAROLE','2013-06-16','OBC','668008510618','304134723','ARIHANT NAGAR','7000961233','15','7','A','10'],
      ['PRAGYA','YADAV','RADHESHYAM YADAV','BHARTI YADAV','2013-08-02','OBC','787906517989','302992780','ARIHANT NAGAR','9754418178','274','7','A','11'],
      ['RADHIKA','NAMDEV','CHANDAR NAMDEV','PINKEE NAMDEV','2013-11-03','OBC','659108368421','','ARIHANT NAGAR','8982131988','293','7','A','12'],
      ['RAJSHRI','PAWAR','ROHIT PAWAR','KOMAL PAWAR','2015-05-02','OBC','897507585228','132984543','ARIHANT NAGAR','7028325602','199','7','A','13'],
      ['ABHINANDAN','YADAV','SURESH YADAV','DURPTA YADAV','2014-05-18','OBC','960749958798','303945549','NENOD','9977205653','180','7','A','14'],
      ['ANSH','VERMA','ASHOK','JYOTI','2014-12-27','','','','','','','7','A','15'],
      ['ANSHU','TOMAR','JITENDRA TOMAR','MAMTA TOMAR','2015-04-20','General','931314143446','304940865','SIDHARTH','8319528330','87','7','A','16'],
      ['ARUN','VERMA','VIRENDRA','RAJKUMARI','2013-06-27','','','','','','','7','A','17'],
      ['DHANRAJ','CHOUHAN','DILIP CHOUHAN','LAXMI CHOUHAN','2014-01-01','OBC','920173687603','197985428','GOMTESH','8224040891','71','7','A','18'],
      ['DIVYANSHU','KUSHWAH','JAGBHAN KUSHWAH','GEETA KUSHWAH','2014-05-05','OBC','715786906382','303494890','ARIHANT NAGAR','7987752065','18','7','A','19'],
      ['JITENDRA','CHOUHAN','DINESH CHOUHAN','KIRAN BAICHOUHAN','2014-01-09','ST','514912031165','303661916','BHERUMAHARAJ','7389662072','604','7','A','20'],
      ['KUNAL','SISODIYA','NARENDRA SISODIYA','REENA SISODIYA','2013-07-13','General','805543229588','194439924','GOMTESH','6262734476','83','7','A','21'],
      ['MITHILESH','PAWAR','DHEERAJ PAWAR','YAMINI PAWAR','2014-05-08','General','934098238538','320147571','ARIHANT NAGAR','8839663439','288','7','A','22'],
      ['NARAYAN','CHOUHAN','DINESH CHOUHAN','KIRAN BAI CHOUHAN','2011-11-01','ST','732458726082','199076667','BHERUMAHARAJ','7389662072','603','7','A','23'],
      ['OMPRAKASH','GURJAR','PUSHKAR LAL GURJAR','PREM BAI GURJAR','2014-07-23','OBC','869306326556','178570820','GOMTESH','9826818537','209','7','A','24'],
      ['RISHIKESH','YADAV','RAMNIVAS','CHHAYA','2014-08-30','OBC','','323864177','SAMARTH DRIM','7803979542','234','7','A','25'],
      ['RUDRA','JAISWAL','MILAN JAISWAL','KAVITA JAISWAL','2015-02-11','OBC','832352860477','302275582','GOMTESH','9630802527','46','7','A','26'],
      ['VEER','THAKUR','BIRJU THAKUR','KALPANA THAKUR','2011-10-27','General','695863733551','100995127','ARIHANT NAGAR','7869427427','122','7','A','27'],
      ['DIKSHA','PARMAR','SAWAI SINGH PARMAR','REKHA PARMAR','2013-07-25','OBC','896176199228','306639160','SAMARTH CITY','9926014983','475','8','A','1'],
      ['HIMANGI','NARWALE','RAVI NARWALE','MILEE NARWALE','2013-11-23','SC','682062875380','309761561','MULTI','9644076797','120','8','A','2'],
      ['JAGRATI','PANWAR','CHANDAR SINGH  PANWAR','NIRMALA  PANWAR','2013-10-12','OBC','776118562224','312018905','SIDHARTH','9630879617','372','8','A','3'],
      ['KANIKA','DAWAR','MAHENDRA DAWAR','RINA  DAWAR','2014-04-14','ST','990798470716','300173722','BUDHANIYA','9685946330','480','8','A','4'],
      ['KHUSHI','CHOUHAN','DEELIP  CHOUHAN','LAXMI  CHOUHAN','2011-07-16','OBC','287726235172','158827609','GOMTESH','8224040891','77','8','A','5'],
      ['NAVYA','LUHAR','LAXMAN LAL LUHAR','BANTI LUHAR','2014-08-29','OBC','921741447044','320294348','ARIHANT NAGAR','8875464478','447','8','A','6'],
      ['LAXMI','AHIRWAL','RAJKUMAR  AHIRWAL','GUDDI BAI  AHIRWAL','2013-08-31','SC','696951334320','320783912','ARIHANT NAGAR','6266651517','84','8','A','7'],
      ['PRIYANSHI','TOMAR','JITENDRA  TOMAR','MAMTA  TOMAR','2013-02-01','General','911974213350','304940862','SIDHARTH','8319528330','96','8','A','8'],
      ['RADHIKA','RAJPUT','ARJUN RAJPUT','LAXMI  RAJPUT','2013-04-10','OBC','747259350954','324097272','ARIHANT NAGAR','9131422367','153','8','A','9'],
      ['RAJANI','YADAV','RAMNIVAS  YADAV','CHHAYA  YADAV','2012-11-12','OBC','351216844697','102887128','SAMATH DRIM','7803979542','228','8','A','10'],
      ['RISHIKA','PAWAR','KAMAL  PAWAR','JYOTI  PAWAR','2013-08-31','OBC','912422666426','305933566','SIDDARTH NAGAR','8889090223','373','8','A','11'],
      ['SANDHYA','VISHWKARMA','BALKRISHNA  VISHWKARMA','RITU VISHWKARMA','2013-03-12','OBC','480316180092','312587351','ARIHANT NAGAR','9826729179','278','8','A','12'],
      ['SHANU','SHARMA','VIJAY  SHARMA','VANDANA  SHARMA','2013-01-15','General','729644131330','302788273','ARIHANT NAGAR','9098831447','133','8','A','13'],
      ['VIDHYA','PRAJAPAT','MUKESH  PRAJAPAT','REKHA  PRAJAPAT','2013-12-13','OBC','819820943332','180949652','ARIHANT NAGAR','9753237032','230','8','A','14'],
      ['AYUSH','DEVDA','MAHENDRA  DEVDA','SONU  DEVDA','2011-11-16','ST','407684803794','310272116','ARIHANT NAGAR','9303078438','243','8','A','15'],
      ['ABHISHEKH','BOYAT','AMIT  BOYAT','REENA  BOYAT','2012-10-31','SC','940878421974','301038221','MULTI','8817759434','479','8','A','16'],
      ['AKSHAT','SISODIYA','NARENDRA  SISODIYA','REENA SISODIYA','2011-12-09','SC','592286279737','123391362','GOMTESH','6262734476','82','8','A','17'],
      ['DAKSH','JHALA','SHAILENDRA SINGH JHALA','AAYUSHI  JHALA','2014-01-08','General','309897726760','316261216','ARIHANT NAGAR','9617591403','526','8','A','18'],
      ['PRINCE','MAKWANA','JAGIDAR MAKWANA','LAXMI  MAKWANA','2013-01-26','SC','881688352023','308123226','BUDHANIYA','8889361120','570','8','A','19'],
      ['PUSHKAR','GURJAR','LALARAM GURJAR','LAXMIBAI GURJAR','2012-09-16','OBC','378852302725','309555086','ARIHANT NAGAR','9893723946','','8','A','20'],
      ['RAJVEER','YADAV','NARYAN  YADAV','MANISHA YADAV','2014-06-13','OBC','796618080680','302508785','ARIHANT NAGAR','7771873884','161','8','A','21'],
      ['RISHI','PARMAR','RAMPRASAD PARMAR','KOMAL PARMAR','2012-01-06','OBC','994730196347','307505641','SIDDARTH NAGAR','8889583246','579','8','A','22'],
      ['RUDRA','CHOUHAN','SANDEEP  CHOUHAN','JYOTI  CHOUHAN','2012-06-25','OBC','508946780391','155636119','ARIHANT NAGAR','9174498149','6','8','A','23'],
      ['SACHIN','SARODE','GIRISH  SARODE','JYOTI  SARODE','2012-12-12','OBC','664373463803','320244546','MULTI','9977651703','527','8','A','24'],
      ['VIRAT','PARMAR','VIJENDRA  PARMAR','NEHA  PARMAR','2013-07-21','OBC','970627381664','311034715','ARIHANT NAGAR','9713780644','476','8','A','25'],
      ['VINIT','MANGROLE','MANGESH  MANGROLE','ANITA MANGROLE','2011-09-20','General','884618128972','103550410','BAHUBALI NAGAR','7974642605','528','8','A','26'],
      ['AARUSHI','SAWNER','DEEPAK  SAWNER','MANJU  SAWNER','2011-07-29','General','750580221473','305439302','ARIHANT NAGAR','9179023238','28','9','A','1'],
      ['KHUSHI','PANCHAL','SUNIL  PANCHAL','JYOTI PANCHAL','2012-02-13','OBC','312134238412','106281184','ARIHANT NAGAR','9826685560','176','9','A','2'],
      ['PRASIDDHI','TOMAR','SHAILENDRA TOMAR','SARITA  TOMAR','2012-04-06','General','502298444243','304385692','SIDHARTH NAGAR','6263805264','97','9','A','3'],
      ['ROSHNI','JAIN','RAJEEV KUMAR  JAIN','USHA  JAIN','2013-05-22','General','535533855852','198354810','GOMETESH CITY','9301013168','433','9','A','4'],
      ['TINA','TINA','ANIL','NIRMALA','2011-11-21','','','','','','','9','A','5'],
      ['AALOK','RAM','HARINATH RAM','POOJA RAM','2012-06-30','SC','707170693416','197181089','ARIHANT NAGAR','8602644174','61','9','A','6'],
      ['AMAN','KUMAR VERMA','VIRENDRA','RAJKUMARI','2011-09-09','','','','','','','9','A','7'],
      ['BHAVISHYA','YADAV','SUDHEER  YADAV','VIDHYA  YADAV','2012-09-07','OBC','520661265800','104894410','ARIHANT NAGAR','7828769921','277','9','A','8'],
      ['BHUPENDRA','REBARI','DINESH  REBARI','RAJU  REBARI','2012-07-04','OBC','813161716181','200503759','GOMTESH','9171215395','335','9','A','9'],
      ['DIVYANSH','KUSHWAH','BABULAL  KUSHWAH','KAUSHALIYA  KUSHWAH','2012-11-24','OBC','659200618756','307236249','ARIHANT NAGAR','7987752065','20','9','A','10'],
      ['DURGESH','RAGHUWANSHI','SACHIN  RAGHUWANSHI','ANJALI RAGHUWANSHI','2012-03-22','General','891406139303','198732102','ARIHANT NAGAR','9669690892','32','9','A','11'],
      ['KULDEEP','KUMAWAT','ANIL','CHANCHAL','2012-03-31','OBC','931076976235','301474888','ARIHANT NAGAR','9300509340','','9','A','12'],
      ['LAKKI','SOLANKI','PANKAJ  SOLANKI','BHAWANA  SOLANKI','2012-01-31','OBC','881534172377','164065669','JAMBURDI HAPSI','9399542500','449','9','A','13'],
      ['MOHIT','SHINDE','KUNDAN  SHINDE','LAXMI  SHINDE','2012-04-12','ST','415720051630','150677164','MULTI','9893631934','482','9','A','14'],
      ['PAVAN','GURJAR','DEVILAL GURJAR','MEERA DEVI GURJAR','2011-10-29','OBC','687148424587','324091716','ARIHANT NAGAR','8459431334','619','9','A','15'],
      ['PIYUSH','YADAV','RAMCHAND  YADAV','RAMDULARI  YADAV','2011-11-15','OBC','304814669925','192850773','GOSHALA','9009229140','31','9','A','16'],
      ['PRANJAL','ACHARYA','SONU  ACHARYA','TARUNA  ACHARYA','2008-09-22','OBC','','105688317','ARIHANT NAGAR','8305391193','638','9','A','17'],
      ['PRUTHVIRAJ','MAKWANA','JITENDRA  MAKWANA','AASHA  MAKWANA','2013-08-15','ST','524045673159','306563740','BUDHANIYA','9589715152','473','9','A','18'],
      ['PRATIK','MALVIYA','RAJESH  MALVIYA','PINKI  MALVIYA','2011-05-10','OBC','617229824474','306443210','ARIHANT NAGAR','7974013414','350','9','A','19'],
      ['SHUBHAM','BUNDELIYA','SANJU  BUNDELIYA','KIRTI  BUNDELIYA','2011-06-07','ST','532810860078','303159162','BHERU MAHARAJ','8817295774','410','9','A','20'],
      ['VANSH','UTWAL','ASHISH  UTWAL','SANGEETA UTWAL','2011-10-22','SC','613928082261','104348542','MULTI','8358962939','311','9','A','21'],
      ['VINAYAK','SAKHALA','RAGHAV  SAKHALA','MAYA BAI  SAKHALA','2012-07-16','OBC','325281910443','192110097','JAMBURDI HAPSI','9981070519','578','9','A','22'],
      ['YUVRAJ','CHOUHAN','YOGESH   CHOUHAN','PINKI   CHOUHAN','2012-03-10','OBC','310480287046','101197587','SIDDARTH NAGAR','9826720906','450','9','A','23'],
      ['YUVRAJ','DAYAL','JEEVAN  DAYAL','SAPANA  DAYAL','2012-09-11','OBC','725766462453','160726299','JAMBUDI HAPSI','9691321525','332','9','A','24'],
      ['ANAMIKA','BHATIYA','PANKAJ','MAMTA','2012-04-23','OBC','693643790059','198754331','ARIHANT NAGAR','7987182352','3577','10','A','1'],
      ['ESHIQA','UTWAL','ASHISH','SANGEETA','2009-01-19','SC','302779629911','104348045','MULTI','8358962939','3366','10','A','2'],
      ['KANAK','PEJWAL','ASHOK','HEMA','2011-04-11','ST','319569588902','136351783','161 ARIHANT NAGAR','9301026438','3365','10','A','3'],
      ['KRATIKA','SOLANKI','SURAJ SOLANKI','PRERNA SOLANKI','2011-09-20','OBC','498570026188','319001103','188/C SIDDARTH NAGAR','8103837630','3357','10','A','4'],
      ['LAVISHA','TOMAR','SATENDRA TOMAR','BHARTI TOMAR','2011-05-03','General','850562983159','304373769','SIDHARTH','8989768243','3364','10','A','5'],
      ['MUSKAN','SINGH','RAKESH SINGH','GEETA SINGH','2010-03-31','General','579547751047','322017886','ARIHANT NAGAR','8821010369','3373','10','A','6'],
      ['SANDHYA','KEWAT','LAXMAN SINGH KEWAT','LALITA KEWAT','2012-08-31','OBC','468502017818','199943286','SUKSANTOSH','8085497329','3363','10','A','7'],
      ['SHREYA','MALVIYA','POONAM','SHOBHA','2009-09-09','OBC','536434552331','','ARIHANT NAGAR','9509584012','','10','A',''],
      ['TANISHKA','PARE','RAJESH  PARE','JYOTI  PARE','2011-04-06','General','276430814002','141906902','SAMARTH CITY','9893433454','3372','10','A','8'],
      ['VEDIKA','RATHORE','MUKESH  RATHORE','RENU  RATHORE','2010-03-22','OBC','761913756037','111731117','SIDHARTH','9399128938','3362','10','A','9'],
      ['ABHISHEK','YADAV','SURESH YADAV','DURPTA YADAV','2011-06-16','OBC','428257949665','303945548','NAINOD','9977205653','3361','10','A','10'],
      ['ADITYA','RAIKWAR','AJAY  RAIKWAR','RANU  RAIKWAR','2010-10-14','OBC','223644117656','189003378','SAMARTH DREAM','9926112010','3360','10','A','11'],
      ['ANSHUMAN','PAWAR','CHANDAN PAWAR','SANTA BAI PAWAR','2011-11-07','OBC','893520259316','157982672','SIDHARTH','9630879617','3358','10','A','12'],
      ['ARJUN','SINGH SOLANKI','BHANWAR SOLANKI','INDUSINGH SOLANKI','2011-08-18','General','380995422810','307716613','ARIHANT NAGAR','9509623566','3357','10','A','13'],
      ['DHANANJAY','SOLANKI','BHARAT SOLANKI','RINA SOLANKI','2012-10-13','OBC','497736976340','164003722','JAMBURDI HAPSI','7067778423','3375','10','A','14'],
      ['DIVYANSH','GIRI GOSWAMI','CHANDRESH GIRI GIRI GOSWAMI','MANISHA GIRI GOSWAMI','2012-01-01','OBC','879285531058','130961820','ARIHANT NAGAR','9926548684','3369','10','A','15'],
      ['KANHAIYA','GOUR','KEVALRAM  GOUR','KSHAMA  GOUR','2011-11-16','OBC','870881130554','193943980','ARIHANT NAGAR','7225951130','3356','10','A','16'],
      ['KRISHNA','BHABAR','RAJU BHABAR','NARMDA BHABAR','2010-04-20','ST','487402148607','309091056','BUDHANIYA','7828731699','3355','10','A','17'],
      ['LALIT','REBARI','DINESH LAL REBARI','RAJU BAI REBARI','2010-08-03','OBC','708113071437','200503760','GOMTESH','9171215395','3374','10','A','18'],
      ['NAMAN','VISHWAKARAMA','AMARCHANDRA VISHWAKARAMA','VARSHA VISHWAKARAMA','2010-01-01','OBC','585803743999','167421840','ARIHANT NAGAR','9669131995','3354','10','A','19'],
      ['PAWAN','GOSWAMI','NAGUGIR GOSWAMI','KUSHAL  GOSWAMI','2010-02-14','General','831293402053','199110037','SATPUDA','9691936616','3353','10','A','20'],
      ['PURVANSH','TIWARI','NITESH TIWARI','SHILPA TIWARI','2009-12-09','General','229869923226','138966674','SIDHARTH','9165365612','3368','10','A','21'],
      ['RAJA','RATHORE','ANIL  RATHORE','SUNITA  RATHORE','2011-08-19','ST','550983953065','303890101','BHERU MAHARAJ','6268450550','3370','10','A','22'],
      ['RAMCHANDRA','GUJJAR','PUSHKAR LAL GUJJAR','PREM BAI GUJJAR','2011-05-10','OBC','843069205152','178570728','GOMTESH','9826818537','3371','10','A','23'],
      ['VIRENDRA','SINGH SISODIYA','GAJENDRA SINGH SISODIYA','URMILA SISODIYA','2011-08-23','General','389216942390','156219116','356 ARIHANT NAGAR','9039621156','3352','10','A','24']
    ];

  rows.forEach(([firstName,lastName,fatherName,motherName,dob,category,studentAadhar,studentSSSM,address,phone,schNo,cls,section,rollNumber]) => {
    students.push({
      id: uid('stu'),
      admissionNumber: schNo || ('CND/' + new Date().getFullYear() + '/' + String(students.length+1).padStart(3,'0')),
      firstName, lastName, fatherName, motherName, dob, category, studentAadhar, studentSSSM, address,
      phone, whatsapp: phone, cls, section, rollNumber, status: 'active',
      medium: 'English Medium', session: '2026-27',
      motherTongue: 'Hindi', nationality: 'Indian',
      tc: {issued:false}
    });
  });
  saveAll();
}

document.getElementById('ayTag').textContent = 'AY ' + currentAcademicYear() + ' · Staff Access';
[document.getElementById('lockLogo'), document.getElementById('sidebarLogo'), document.getElementById('setupLogo')].forEach(img => {
  if(!img) return;
  img.src = LOGO_DATA_URI;
  img.style.display = 'block';
});

function checkSession(){
  if(users.length === 0){
    document.getElementById('lockScreen').style.display = 'none';
    document.getElementById('setupScreen').style.display = 'flex';
    return;
  }
  document.getElementById('setupScreen').style.display = 'none';
  const u = currentUser();
  if(u){
    document.getElementById('lockScreen').style.display = 'none';
    document.getElementById('app').style.display = 'flex';
    document.getElementById('footerName').textContent = u.name;
    document.getElementById('footerRole').innerHTML = `<span class="record-tag" style="padding:1px 6px;">${escapeHtml(ROLE_LABELS[u.role]||u.role)}</span>`;
    renderSidebar();
    renderApp();
  } else {
    document.getElementById('lockScreen').style.display = 'flex';
  }
}
document.getElementById('setupForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('setupName').value.trim();
  const username = document.getElementById('setupUsername').value.trim().toLowerCase();
  const password = document.getElementById('setupPassword').value;
  const confirm = document.getElementById('setupPasswordConfirm').value;
  const msg = document.getElementById('setupMsg');
  if(password !== confirm){
    msg.textContent = "Passwords don't match.";
    msg.style.display = 'block';
    return;
  }
  if(password.length < 6){
    msg.textContent = 'Password must be at least 6 characters.';
    msg.style.display = 'block';
    return;
  }
  const newAdmin = {
    id: uid('usr'), name, username, password,
    role: 'admin', permissions: JSON.parse(JSON.stringify(ROLE_PRESETS.admin)),
    status: 'active', createdAt: todayIso(),
  };
  users.push(newAdmin);
  saveAll();
  localStorage.setItem(LS.session, JSON.stringify({userId: newAdmin.id, at: Date.now()}));
  msg.style.display = 'none';
  checkSession();
});
document.getElementById('lockForm').addEventListener('submit', function(e){
  e.preventDefault();
  const username = document.getElementById('loginUsername').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;
  const msg = document.getElementById('lockMsg');
  const match = users.find(u => u.username.toLowerCase() === username && u.password === password);
  if(!match){
    msg.textContent = 'Incorrect username or password.';
    msg.style.display = 'block';
    return;
  }
  if(match.status !== 'active'){
    msg.textContent = 'This account has been deactivated. Contact your admin.';
    msg.style.display = 'block';
    return;
  }
  localStorage.setItem(LS.session, JSON.stringify({userId: match.id, at: Date.now()}));
  msg.style.display = 'none';
  checkSession();
});
function lockApp(){
  localStorage.removeItem(LS.session);
  document.getElementById('app').style.display = 'none';
  document.getElementById('lockScreen').style.display = 'flex';
  document.getElementById('lockForm').reset();
}

/* ---------------- sidebar / routing ---------------- */
const NAV_ITEMS = [
  {name:'dashboard', label:'Dashboard', icon:'&#9632;', perm:'dashboard'},
  {name:'timetable', label:'Time Table', icon:'&#128197;', perm:null},
  {name:'notices', label:'Notices', icon:'&#128276;', perm:null},
  {name:'enquiries', label:'Enquiries', icon:'&#9993;', perm:'enquiries'},
  {name:'admissions', label:'Admissions', icon:'&#127891;', perm:'students'},
  {name:'students', label:'Students', icon:'&#9787;', perm:'students'},
  {name:'staff', label:'Staff', icon:'&#9878;', perm:'staffDirectory'},
  {name:'studentAttendance', label:'Student Attendance', icon:'&#10003;', perm:'studentAttendance'},
  {name:'exams', label:'Exams & Results', icon:'&#127891;', perm:'exams'},
  {name:'distribution', label:'Distribution', icon:'&#128230;', perm:'distribution'},
  {name:'fees', label:'Fees', icon:'&#8377;', perm:'fees'},
  {name:'salary', label:'Salary', icon:'&#128176;', perm:'salary'},
  {name:'expenses', label:'Expenses', icon:'&#128176;', perm:'expenses'},
  {name:'dataCenter', label:'Data Center', icon:'&#128190;', perm:'userManagement'},
  {name:'users', label:'User Access', icon:'&#128273;', perm:'userManagement'},
];
function renderSidebar(){
  document.getElementById('sidebarNav').innerHTML = NAV_ITEMS.filter(item => !item.perm || can(item.perm)).map(item => {
    const active = (view.name === item.name) || (item.name==='students' && view.name==='studentDetail');
    return `<button class="nav-link ${active?'active':''}" onclick="goTo('${item.name}')"><span class="dot">${item.icon}</span>${item.label}</button>`;
  }).join('');
}
function goTo(name){
  selectedStudentIds.clear();
  Object.values(selectedRecordIds).forEach(set => set.clear());
  if(name === 'students') studentFilters = { q:'', status:'', category:'' };
  if(name === 'admissions') admissionsFilters = { cls:'', status:'' };
  view = { name, studentId: null };
  renderSidebar();
  renderApp();
}
function goToStudent(id){
  selectedStudentIds.clear();
  view = { name:'studentDetail', studentId: id };
  renderSidebar();
  renderApp();
}
const VIEW_PERMISSIONS = { dashboard:'dashboard', students:'students', studentDetail:'students', studentsByClass:'students', admissions:'students', enquiries:'enquiries', staff:'staffDirectory', staffDetail:'staffDirectory', studentAttendance:'studentAttendance', distribution:'distribution', distributionClass:'distribution', fees:'fees', salary:'salary', expenses:'expenses', exams:'exams', examDetail:'exams', examMarksEntry:'exams', dataCenter:'userManagement', users:'userManagement' };
function renderApp(){
  const topbar = document.getElementById('topbar');
  const content = document.getElementById('content');
  const needed = VIEW_PERMISSIONS[view.name];
  if(needed && !can(needed)){ renderAccessDenied(topbar, content); return; }
  if(view.name === 'dashboard'){ renderDashboard(topbar, content); }
  else if(view.name === 'timetable'){ renderTimeTable(topbar, content); }
  else if(view.name === 'notices'){ renderNotices(topbar, content); }
  else if(view.name === 'admissions'){ renderAdmissions(topbar, content); }
  else if(view.name === 'students'){ renderStudents(topbar, content); }
  else if(view.name === 'studentsByClass'){ renderStudentsByClass(topbar, content, view.cls); }
  else if(view.name === 'studentDetail'){ renderStudentDetail(topbar, content, view.studentId); }
  else if(view.name === 'enquiries'){ renderEnquiries(topbar, content); }
  else if(view.name === 'staff'){ renderStaff(topbar, content); }
  else if(view.name === 'staffDetail'){ renderStaffDetail(topbar, content, view.staffId); }
  else if(view.name === 'studentAttendance'){ renderStudentAttendance(topbar, content); }
  else if(view.name === 'exams'){ renderExams(topbar, content); }
  else if(view.name === 'examDetail'){ renderExamDetail(topbar, content, view.examId); }
  else if(view.name === 'examMarksEntry'){ renderExamMarksEntry(topbar, content, view.examId); }
  else if(view.name === 'distribution'){ renderDistribution(topbar, content); }
  else if(view.name === 'distributionClass'){ renderDistributionClassDetail(topbar, content, view.cls); }
  else if(view.name === 'fees'){ renderFees(topbar, content); }
  else if(view.name === 'salary'){ renderSalary(topbar, content); }
  else if(view.name === 'expenses'){ renderExpenses(topbar, content); }
  else if(view.name === 'dataCenter'){ renderDataCenter(topbar, content); }
  else if(view.name === 'users'){ renderUserManagement(topbar, content); }
}
function renderAccessDenied(topbar, content){
  topbar.innerHTML = `<div><h1>Access restricted</h1></div>`;
  content.innerHTML = `<div class="card" style="max-width:480px;">
    <p style="font-size:14px;">Your account doesn't have permission to view this section.</p>
    <p style="font-size:13px;color:var(--ink-soft);margin-top:8px;">If you need access for your role, ask your admin to update it from User Access.</p>
  </div>`;
}

/* ---------------- dashboard ---------------- */
const PENDING_STATUSES = ['new'];
var STAGE_LABELS = {new:'New', admitted:'Admitted', lost:'Lost'};

function renderDashboard(topbar, content){
  topbar.innerHTML = `
    <div><h1>Dashboard</h1><p>Snapshot across enquiries, students, staff, fees, and salary.</p></div>
    <div>
      <label for="timeframeSelect" style="font-size:12px;color:var(--ink-soft);display:block;margin-bottom:3px;">Timeframe</label>
      <select id="timeframeSelect" style="border:1px solid var(--line);border-radius:6px;padding:8px 10px;background:var(--surface);font-family:inherit;" onchange="dashboardTimeframe=this.value; renderDashboard(document.getElementById('topbar'),document.getElementById('content'));">
        ${Object.keys(TIMEFRAME_LABELS).map(k=>`<option value="${k}" ${dashboardTimeframe===k?'selected':''}>${TIMEFRAME_LABELS[k]}</option>`).join('')}
      </select>
    </div>`;

  const range = getTimeframeRange(dashboardTimeframe);
  const timeframeLabel = TIMEFRAME_LABELS[dashboardTimeframe];

  // Always the full current total, regardless of timeframe.
  const activeStudents = students.filter(s => s.status === 'active').length;
  const activeStaff = staffList.filter(s => s.employmentStatus === 'active').length;

  // Period-filtered metrics.
  const admissionsInPeriod = students.filter(s => inRange(s.admissionDate, range)).length;
  const enquiriesInPeriod = enquiries.filter(e => inRange(e.createdAt, range)).length;
  const feesPendingAmt = fees.filter(f => inRange(f.dueDate, range) && feeStatus(f) !== 'paid')
    .reduce((sum,f) => sum + Math.max(0,(Number(f.amountDue)||0)-(Number(f.amountPaid)||0)), 0);
  const totalCollectionAmt = fees.filter(f => inRange(f.paidDate, range))
    .reduce((sum,f) => sum + (Number(f.amountPaid)||0), 0);

  const todayKey = todayIso();
  const classCounts = CLASS_LEVELS.map(c => {
    const enrolled = students.filter(s=>s.cls===c && s.status==='active').length;
    const todaysMarks = studentAttendance.filter(a => a.date===todayKey && a.cls===c);
    const absent = todaysMarks.filter(a=>a.status==='A').length;
    const leave = todaysMarks.filter(a=>a.status==='L').length;
    return {
      label: c,
      board: BOARD_CLASSES.includes(c),
      count: enrolled,
      absent, leave,
      registerTaken: can('studentAttendance') && (todaysMarks.length > 0),
    };
  });
  const classMax = Math.max(1, ...classCounts.map(c=>c.count));

  const recent = [...enquiries].sort((a,b)=> new Date(b.createdAt)-new Date(a.createdAt)).slice(0,5);

  content.innerHTML = `
    <div class="quick-actions">
      ${canEdit('students') ? `<button class="quick-action" onclick="openStudentModal()"><span class="qa-icon">+</span>New Admission</button>` : ''}
      ${canEdit('enquiries') ? `<button class="quick-action" onclick="openEnquiryModal()"><span class="qa-icon">+</span>New Enquiry</button>` : ''}
      ${canEdit('staffDirectory') ? `<button class="quick-action" onclick="openStaffModal()"><span class="qa-icon">+</span>New Staff / Teacher</button>` : ''}
      ${canEdit('fees') ? `<button class="quick-action" onclick="openFeeModal()"><span class="qa-icon">&#8377;</span>Record Fee Payment</button>` : ''}
      ${canEdit('salary') ? `<button class="quick-action" onclick="openSalaryModal()"><span class="qa-icon">&#8377;</span>Record Salary Payment</button>` : ''}
    </div>

    <div class="stat-grid">
      <div class="stat-card"><div class="label">Active students</div><div class="value">${activeStudents}</div><div class="hint">Whole-school strength, all time</div></div>
      <div class="stat-card good"><div class="label">Staff on roll</div><div class="value">${activeStaff}</div><div class="hint">Teaching and non-teaching, all time</div></div>
      <div class="stat-card"><div class="label">Admissions</div><div class="value">${admissionsInPeriod}</div><div class="hint">${timeframeLabel}</div></div>
      <div class="stat-card accent"><div class="label">Enquiries</div><div class="value">${enquiriesInPeriod}</div><div class="hint">${timeframeLabel}</div></div>
      ${can('fees') ? `<div class="stat-card good"><div class="label">Total collection</div><div class="value" style="font-size:26px;">${money(totalCollectionAmt)}</div><div class="hint">Collected ${timeframeLabel.toLowerCase()}</div></div>` : ''}
      ${can('fees') ? `<div class="stat-card accent"><div class="label">Fees pending</div><div class="value" style="font-size:26px;">${money(feesPendingAmt)}</div><div class="hint">Due ${timeframeLabel.toLowerCase()}</div></div>` : ''}
    </div>

    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <h2 style="font-size:18px;">Recent enquiries</h2>
        <button class="btn btn-secondary btn-sm" onclick="goTo('enquiries')">View all</button>
      </div>
      ${recent.length ? `<div style="margin-top:14px;">${recent.map(e => `
        <div style="display:flex;justify-content:space-between;gap:12px;padding:10px 0;border-top:1px solid var(--line);">
          <div style="min-width:0;">
            <p style="margin:0;font-size:14px;font-weight:500;">${escapeHtml(e.childName)}</p>
            <p style="margin:2px 0 0;font-size:12px;color:var(--ink-soft);">Applying for ${escapeHtml(e.classApplyingFor)} · ${formatDate(e.createdAt)}</p>
          </div>
          <span class="record-tag">${STAGE_LABELS[e.status]||e.status}</span>
        </div>`).join('')}</div>`
      : `<p style="margin-top:16px;color:var(--ink-soft);font-size:13px;">No enquiries logged yet. New walk-ins and calls will show up here as soon as your front office adds them.</p>`}
    </div>

    <div class="card" style="margin-top:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <h2 style="font-size:18px;">Enrollment by class</h2>
        ${can('studentAttendance') ? `<button class="btn btn-secondary btn-sm" onclick="goTo('studentAttendance')">Open Attendance Register</button>` : ''}
      </div>
      <p style="font-size:12px;color:var(--ink-soft);margin:2px 0 16px;">Click a class to see its roster · <span class="record-tag" style="padding:1px 6px;">Board</span> marks board-exam classes · today's absent/leave counts come from the Attendance Register</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px;">
        ${classCounts.map(c => `
          <div style="background:var(--surface);border:1px solid var(--line);border-radius:8px;padding:10px 12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:13px;font-weight:500;${can('students')?'cursor:pointer;':''}" ${can('students')?`onclick="goToStudentsByClass('${c.label}')"`:''}>${classDisplayLabel(c.label)}</span>
              ${c.board?'<span class="record-tag" style="padding:1px 6px;">Board</span>':''}
            </div>
            <div style="margin-top:8px;height:6px;background:var(--surface-alt);border-radius:99px;overflow:hidden;">
              <span style="display:block;height:100%;background:${c.board?'var(--accent)':'var(--brand)'};width:${(c.count/classMax)*100}%;"></span>
            </div>
            <div style="margin-top:6px;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:13px;">${c.count} enrolled</div>
            ${can('studentAttendance') ? `
              <div style="margin-top:8px;padding-top:8px;border-top:1px solid var(--line);font-size:11px;cursor:pointer;" onclick="attendanceView={cls:'${c.label}',date:todayIso()};goTo('studentAttendance');">
                ${c.registerTaken
                  ? `<span style="color:var(--bad);font-weight:600;">${c.absent} absent</span> · <span style="color:var(--accent);font-weight:600;">${c.leave} leave</span> today`
                  : `<span style="color:var(--ink-soft);">Today's register not taken yet</span>`}
              </div>` : ''}
          </div>`).join('')}
      </div>
    </div>`;
}

/* ---------------- students: list ---------------- */
/* ---------------- admissions (current-session view, shares Student data + importer) ---------------- */
var admissionsFilters = { cls:'', status:'' };
function renderAdmissions(topbar, content){
  const session = currentAcademicYear();
  const allAdmissions = students.filter(s => s.session === session);

  topbar.innerHTML = `
    <div><h1>Admissions</h1><p>${allAdmissions.length} student${allAdmissions.length===1?'':'s'} admitted this session (${escapeHtml(session)})</p></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn btn-secondary" onclick="downloadCategoryCsv('admissions')">Download CSV</button>
      ${can('userManagement') ? `<button class="btn btn-secondary" onclick="goTo('dataCenter')">Data Center</button>` : ''}
      ${canEdit('students') ? `<button class="btn btn-primary" onclick="openStudentModal()">+ New Admission</button>` : ''}
    </div>`;

  content.innerHTML = `
    <div class="toolbar">
      <button type="button" class="btn btn-secondary" onclick="document.getElementById('admissionsFilterPanel').style.display=document.getElementById('admissionsFilterPanel').style.display==='none'?'flex':'none';">Filter</button>
      <div id="admissionsFilterPanel" style="display:none;gap:10px;flex-wrap:wrap;width:100%;background:var(--surface-alt);border-radius:8px;padding:10px 12px;">
        <select onchange="admissionsFilters.cls=this.value; renderAdmissionsTable();">
          <option value="">Any class</option>
          ${CLASS_LEVELS.map(c=>`<option value="${c}" ${admissionsFilters.cls===c?'selected':''}>${classDisplayLabel(c)}</option>`).join('')}
        </select>
        <select onchange="admissionsFilters.status=this.value; renderAdmissionsTable();">
          <option value="">Any status</option>
          <option value="active" ${admissionsFilters.status==='active'?'selected':''}>Active</option>
          <option value="inactive" ${admissionsFilters.status==='inactive'?'selected':''}>Inactive</option>
          <option value="tc_issued" ${admissionsFilters.status==='tc_issued'?'selected':''}>TC issued</option>
        </select>
      </div>
    </div>
    <div id="admissionsTableWrap"></div>`;
  renderAdmissionsTable();
}
function renderAdmissionsTable(){
  const session = currentAcademicYear();
  const admissions = students.filter(s => {
    if(s.session !== session) return false;
    if(admissionsFilters.cls && s.cls !== admissionsFilters.cls) return false;
    if(admissionsFilters.status && s.status !== admissionsFilters.status) return false;
    return true;
  }).sort((a,b)=>(b.admissionDate||'').localeCompare(a.admissionDate||''));
  const allIds = admissions.map(s=>s.id);
  const allSelected = allIds.length>0 && allIds.every(id=>selectedStudentIds.has(id));

  document.getElementById('admissionsTableWrap').innerHTML = admissions.length===0 ? `<div class="table-wrap"><div class="empty">No admissions match these filters.</div></div>` : renderBulkActionBar() + `
    <div class="table-wrap"><table>
      <thead><tr><th><input type="checkbox" title="Select all" ${allSelected?'checked':''} onchange="toggleAllStudentSelection('admissionsTableWrap',this.checked)" style="width:auto;" /></th><th>Student</th><th>Scholar no.</th><th>Class</th><th>Admission date</th><th>Status</th><th></th></tr></thead>
      <tbody>
        ${admissions.map(s => `
          <tr>
            <td><input type="checkbox" data-id="${s.id}" ${selectedStudentIds.has(s.id)?'checked':''} onchange="toggleStudentSelection('${s.id}',this.checked);updateBulkActionBar();" style="width:auto;" /></td>
            <td><div style="display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="goToStudent('${s.id}')">
              ${avatarHtml(s.photo, s.firstName, s.lastName, 30)}
              <span style="font-weight:500;">${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</span>
            </div></td>
            <td><span class="record-tag">${escapeHtml(s.admissionNumber)}</span></td>
            <td style="color:var(--ink-soft);">${classDisplayLabel(s.cls)}${escapeHtml(s.section)}</td>
            <td style="color:var(--ink-soft);">${formatDate(s.admissionDate)}</td>
            <td>${statusPill(s.status)}</td>
            <td style="text-align:right;"><button class="btn btn-secondary btn-sm" onclick="goToStudent('${s.id}')">View</button></td>
          </tr>`).join('')}
      </tbody>
    </table></div>`;
  updateBulkActionBar();
}
function renderStudents(topbar, content){
  topbar.innerHTML = `
    <div><h1>Student Directory</h1><p>${students.length} student${students.length===1?'':'s'} on record</p></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn btn-secondary" onclick="downloadCategoryCsv('students')">Download CSV</button>
      <button class="btn btn-secondary" onclick="printStudents()">Print List</button>
      ${can('userManagement') ? `<button class="btn btn-secondary" onclick="goTo('dataCenter')">Data Center</button>` : ''}
      ${canEdit('students') ? `<button class="btn btn-primary" onclick="openStudentModal()">+ Add student</button>` : ''}
    </div>`;

  content.innerHTML = `
    <div class="toolbar" style="align-items:flex-start;flex-wrap:wrap;">
      <input type="text" id="studentSearchInput" placeholder="Search name or scholar no. — or pick a class below" value="${escapeHtml(studentFilters.q)}" oninput="studentFilters.q=this.value; renderStudentsMain();" style="min-width:280px;" />
      <button type="button" class="btn btn-secondary" onclick="document.getElementById('studentFilterPanel').style.display=document.getElementById('studentFilterPanel').style.display==='none'?'flex':'none';">Filter</button>
      <button type="button" id="studentSearchClearBtn" class="btn btn-secondary btn-sm" style="display:none;" onclick="document.getElementById('studentSearchInput').value='';studentFilters={q:'',status:'',category:''};renderStudents(document.getElementById('topbar'),document.getElementById('content'));">Clear filters</button>
      <div id="studentFilterPanel" style="display:none;gap:10px;flex-wrap:wrap;width:100%;background:var(--surface-alt);border-radius:8px;padding:10px 12px;">
        <select onchange="studentFilters.status=this.value; renderStudentsMain();">
          <option value="">Any status</option>
          <option value="active" ${studentFilters.status==='active'?'selected':''}>Active</option>
          <option value="inactive" ${studentFilters.status==='inactive'?'selected':''}>Inactive</option>
          <option value="tc_issued" ${studentFilters.status==='tc_issued'?'selected':''}>TC issued</option>
        </select>
        <select onchange="studentFilters.category=this.value; renderStudentsMain();">
          <option value="">Any category</option>
          <option value="General" ${studentFilters.category==='General'?'selected':''}>General</option>
          <option value="OBC" ${studentFilters.category==='OBC'?'selected':''}>OBC</option>
          <option value="SC" ${studentFilters.category==='SC'?'selected':''}>SC</option>
          <option value="ST" ${studentFilters.category==='ST'?'selected':''}>ST</option>
        </select>
      </div>
    </div>
    <div id="studentsMainWrap"></div>`;
  renderStudentsMain();
}
function renderStudentsMain(){
  const wrap = document.getElementById('studentsMainWrap');
  const clearBtn = document.getElementById('studentSearchClearBtn');
  if(clearBtn) clearBtn.style.display = hasActiveStudentFilters() ? '' : 'none';
  if(hasActiveStudentFilters()){
    wrap.innerHTML = renderBulkActionBar() + `<div id="studentsTableWrap"></div>`;
    renderStudentsTable();
    return;
  }
  const classCounts = CLASS_LEVELS.map(c => ({
    label: c, board: BOARD_CLASSES.includes(c),
    count: students.filter(s=>s.cls===c && s.status==='active').length,
  }));
  const classMax = Math.max(1, ...classCounts.map(c=>c.count));
  wrap.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px;">
      ${classCounts.map(c => `
        <button onclick="goToStudentsByClass('${c.label}')" style="text-align:left;background:var(--surface);border:1px solid var(--line);border-radius:8px;padding:12px 14px;cursor:pointer;font-family:inherit;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:14px;font-weight:600;">${classDisplayLabel(c.label)}</span>
            ${c.board?'<span class="record-tag" style="padding:1px 6px;">Board</span>':''}
          </div>
          <div style="margin-top:10px;height:6px;background:var(--surface-alt);border-radius:99px;overflow:hidden;">
            <span style="display:block;height:100%;background:${c.board?'var(--accent)':'var(--brand)'};width:${(c.count/classMax)*100}%;"></span>
          </div>
          <div style="margin-top:8px;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:14px;">${c.count} student${c.count===1?'':'s'}</div>
        </button>`).join('')}
    </div>`;
}
function goToStudentsByClass(cls){
  selectedStudentIds.clear();
  view = { name: 'studentsByClass', studentId: null, cls };
  renderSidebar();
  renderApp();
}
function renderStudentsByClass(topbar, content, cls){
  const roster = students.filter(s=>s.cls===cls && s.status==='active').sort((a,b)=>a.firstName.localeCompare(b.firstName));
  topbar.innerHTML = `
    <div>
      <button class="btn btn-secondary btn-sm" onclick="goTo('students')" style="margin-bottom:8px;">&larr; All classes</button>
      <h1>${classDisplayLabel(cls)}</h1>
      <p>${roster.length} student${roster.length===1?'':'s'} enrolled</p>
    </div>
    ${canEdit('students') ? `<button class="btn btn-primary" onclick="openStudentModal(null,'${cls}')">+ Add student</button>` : ''}`;

  content.innerHTML = `
    <div class="card" style="margin-bottom:16px;">
      <h2 style="font-size:16px;">Students</h2>
      <div style="margin-top:10px;">
        ${roster.length===0 ? `<p style="font-size:13px;color:var(--ink-soft);">No active students in this class yet.</p>` : (() => {
          const allIds = roster.map(s=>s.id);
          const allSelected = allIds.length>0 && allIds.every(id=>selectedStudentIds.has(id));
          return renderBulkActionBar() + `
        <div class="table-wrap" id="classRosterTableWrap"><table>
          <thead><tr><th><input type="checkbox" title="Select all" ${allSelected?'checked':''} onchange="toggleAllStudentSelection('classRosterTableWrap',this.checked)" style="width:auto;" /></th><th>Student</th><th>Scholar no.</th><th>Guardian contact</th><th>Status</th><th></th></tr></thead>
          <tbody>
            ${roster.map(s => `
              <tr>
                <td><input type="checkbox" data-id="${s.id}" ${selectedStudentIds.has(s.id)?'checked':''} onchange="toggleStudentSelection('${s.id}',this.checked);updateBulkActionBar();" style="width:auto;" /></td>
                <td><div style="display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="goToStudent('${s.id}')">
                  ${avatarHtml(s.photo, s.firstName, s.lastName, 30)}
                  <span style="font-weight:500;">${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</span>
                </div></td>
                <td><span class="record-tag">${escapeHtml(s.admissionNumber)}</span></td>
                <td style="font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:12px;color:var(--ink-soft);">${escapeHtml(s.fatherPhone||s.motherPhone||s.phone||'—')}</td>
                <td>${statusPill(s.status)}</td>
                <td style="text-align:right;"><button class="btn btn-secondary btn-sm" onclick="goToStudent('${s.id}')">View</button></td>
              </tr>`).join('')}
          </tbody>
        </table></div>`;
        })()}
      </div>
    </div>

    ${can('studentAttendance') ? `
    <div class="card" style="margin-bottom:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <h2 style="font-size:16px;">Attendance</h2>
        <button class="btn btn-secondary btn-sm" onclick="attendanceView={cls:'${cls}',date:todayIso()};goTo('studentAttendance');">Open register</button>
      </div>
      <div id="classAttendanceSummary" style="margin-top:10px;font-size:13px;"></div>
    </div>` : ''}

    ${timeTableData.periods.length>0 ? `
    <div class="card">
      <h2 style="font-size:16px;">Time Table</h2>
      <div style="margin-top:10px;overflow-x:auto;">
        <table style="width:100%;font-size:12px;border-collapse:collapse;">
          <thead><tr>${timeTableData.periods.map(p=>`<th style="text-align:left;padding:4px 8px;white-space:nowrap;border-bottom:1px solid var(--line);">${escapeHtml(p.label)}</th>`).join('')}</tr></thead>
          <tbody><tr>${timeTableData.periods.map(p=>{
            if(p.isBreak) return `<td style="padding:4px 8px;color:var(--accent);font-weight:600;">${escapeHtml(p.label)}</td>`;
            const val = timeTableData.cells[cls+'|'+p.id] || '—';
            return `<td style="padding:4px 8px;">${escapeHtml(val)}</td>`;
          }).join('')}</tr></tbody>
        </table>
      </div>
    </div>` : ''}`;

  if(can('studentAttendance')){
    const todayKey = todayIso();
    const marks = studentAttendance.filter(a=>a.cls===cls && a.date===todayKey);
    const absent = marks.filter(a=>a.status==='A').length;
    const leave = marks.filter(a=>a.status==='L').length;
    const el = document.getElementById('classAttendanceSummary');
    if(el){
      el.innerHTML = marks.length>0
        ? `<span style="color:var(--bad);font-weight:600;">${absent} absent</span> · <span style="color:var(--accent);font-weight:600;">${leave} leave</span> today (of ${roster.length})`
        : `<span style="color:var(--ink-soft);">Today's register not taken yet</span>`;
    }
  }
}
function getFilteredStudents(){
  const q = studentFilters.q.toLowerCase();
  return students.filter(s => {
    if(q && !(`${s.firstName} ${s.lastName} ${s.admissionNumber}`.toLowerCase().includes(q))) return false;
    if(studentFilters.status && s.status !== studentFilters.status) return false;
    if(studentFilters.category && s.category !== studentFilters.category) return false;
    return true;
  }).sort((a,b)=> a.lastName.localeCompare(b.lastName));
}
function hasActiveStudentFilters(){
  return !!(studentFilters.q.trim() || studentFilters.status || studentFilters.category);
}
function renderStudentsTable(){
  const filtered = getFilteredStudents();
  const allIds = filtered.map(s=>s.id);
  const allSelected = allIds.length>0 && allIds.every(id=>selectedStudentIds.has(id));

  document.getElementById('studentsTableWrap').innerHTML = filtered.length===0 ? `<div class="table-wrap"><div class="empty">No students match these filters.</div></div>` : `
    <div class="table-wrap"><table>
      <thead><tr><th><input type="checkbox" title="Select all" ${allSelected?'checked':''} onchange="toggleAllStudentSelection('studentsTableWrap',this.checked)" style="width:auto;" /></th><th>Student</th><th>Scholar no.</th><th>Class</th><th>Guardian contact</th><th>Status</th><th></th></tr></thead>
      <tbody>
        ${filtered.map(s => `
          <tr>
            <td><input type="checkbox" data-id="${s.id}" ${selectedStudentIds.has(s.id)?'checked':''} onchange="toggleStudentSelection('${s.id}',this.checked)" style="width:auto;" /></td>
            <td>
              <div style="display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="goToStudent('${s.id}')">
                ${avatarHtml(s.photo, s.firstName, s.lastName, 34)}
                <span style="font-weight:500;">${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</span>
              </div>
            </td>
            <td><span class="record-tag">${escapeHtml(s.admissionNumber)}</span></td>
            <td style="color:var(--ink-soft);">${escapeHtml(s.cls)}${escapeHtml(s.section)} · Roll ${escapeHtml(s.rollNumber||'—')}</td>
            <td style="font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:12px;color:var(--ink-soft);">${escapeHtml(s.fatherPhone||s.motherPhone||'—')}</td>
            <td>${statusPill(s.status)}</td>
            <td style="text-align:right;"><button class="btn btn-secondary btn-sm" onclick="goToStudent('${s.id}')">View</button></td>
          </tr>`).join('')}
      </tbody>
    </table></div>`;
  updateBulkActionBar();
}
function statusPill(status){
  if(status==='active') return `<span class="pill pill-good">Active</span>`;
  if(status==='tc_issued') return `<span class="pill pill-bad">TC issued</span>`;
  return `<span class="pill pill-neutral">Inactive</span>`;
}
/* ---------------- bulk select (reusable across every Students/Admissions table) ---------------- */
var selectedStudentIds = new Set();
function toggleStudentSelection(id, checked){
  if(checked) selectedStudentIds.add(id); else selectedStudentIds.delete(id);
  updateBulkActionBar();
}
function toggleAllStudentSelection(containerId, checked){
  const container = document.getElementById(containerId);
  if(!container) return;
  container.querySelectorAll('tbody input[type=checkbox][data-id]').forEach(cb => {
    const id = cb.getAttribute('data-id');
    if(checked) selectedStudentIds.add(id); else selectedStudentIds.delete(id);
  });
  renderApp();
}
function clearStudentSelection(){
  selectedStudentIds.clear();
  renderApp();
}
function updateBulkActionBar(){
  const bar = document.getElementById('bulkActionBar');
  if(!bar) return;
  bar.style.display = selectedStudentIds.size > 0 ? 'flex' : 'none';
  const countEl = document.getElementById('bulkSelectedCount');
  if(countEl) countEl.textContent = selectedStudentIds.size;
}
function renderBulkActionBar(){
  return `
    <div id="bulkActionBar" style="display:none;align-items:center;gap:10px;flex-wrap:wrap;background:var(--surface-alt);border:1px solid var(--line);border-radius:8px;padding:8px 12px;margin-bottom:10px;">
      <span style="font-size:13px;"><span id="bulkSelectedCount">0</span> selected</span>
      <button type="button" class="btn btn-secondary btn-sm" onclick="bulkExportSelectedStudents()">Export selected</button>
      ${canEdit('students') ? `<button type="button" class="btn btn-danger btn-sm" onclick="bulkDeleteSelectedStudents()">Delete selected</button>` : ''}
      <button type="button" class="btn btn-secondary btn-sm" onclick="clearStudentSelection()">Clear selection</button>
    </div>`;
}
function bulkDeleteSelectedStudents(){
  if(selectedStudentIds.size === 0) return;
  if(!confirm('Delete ' + selectedStudentIds.size + ' selected student record(s)? This cannot be undone.')) return;
  students = students.filter(s => !selectedStudentIds.has(s.id));
  selectedStudentIds.clear();
  saveAll();
  renderApp();
}
function bulkExportSelectedStudents(){
  if(selectedStudentIds.size === 0) return;
  const rows = students.filter(s=>selectedStudentIds.has(s.id)).map(buildStudentRow);
  const header = DATA_SCHEMAS.students.headers.map(csvEscape).join(',');
  const lines = rows.map(r => r.map(csvEscape).join(','));
  const csv = '\uFEFF' + [header, ...lines].join('\r\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'selected_students_' + todayIso() + '.csv';
  a.click();
}

/* ---------------- bulk select (generic — Fees, Salary, Expenses, Staff, or any future table) ---------------- */
var selectedRecordIds = {};
function getSelectedSet(category){
  if(!selectedRecordIds[category]) selectedRecordIds[category] = new Set();
  return selectedRecordIds[category];
}
function toggleRecordSelection(category, id, checked){
  const set = getSelectedSet(category);
  if(checked) set.add(id); else set.delete(id);
  updateRecordBulkBar(category);
}
function toggleAllRecordSelection(category, containerId, checked){
  const container = document.getElementById(containerId);
  if(!container) return;
  const set = getSelectedSet(category);
  container.querySelectorAll('input[type=checkbox][data-id]').forEach(cb => {
    const id = cb.getAttribute('data-id');
    if(checked) set.add(id); else set.delete(id);
  });
  renderApp();
}
function clearRecordSelection(category){
  getSelectedSet(category).clear();
  renderApp();
}
function updateRecordBulkBar(category){
  const bar = document.getElementById('bulkActionBar_' + category);
  if(!bar) return;
  const size = getSelectedSet(category).size;
  bar.style.display = size > 0 ? 'flex' : 'none';
  const countEl = document.getElementById('bulkSelectedCount_' + category);
  if(countEl) countEl.textContent = size;
}
function renderRecordBulkActionBar(category, deleteHandler){
  return `
    <div id="bulkActionBar_${category}" style="display:none;align-items:center;gap:10px;flex-wrap:wrap;background:var(--surface-alt);border:1px solid var(--line);border-radius:8px;padding:8px 12px;margin-bottom:10px;">
      <span style="font-size:13px;"><span id="bulkSelectedCount_${category}">0</span> selected</span>
      <button type="button" class="btn btn-secondary btn-sm" onclick="bulkExportSelectedRecords('${category}')">Export selected</button>
      ${deleteHandler ? `<button type="button" class="btn btn-danger btn-sm" onclick="${deleteHandler}">Delete selected</button>` : ''}
      <button type="button" class="btn btn-secondary btn-sm" onclick="clearRecordSelection('${category}')">Clear selection</button>
    </div>`;
}
function bulkExportSelectedRecords(category){
  const set = getSelectedSet(category);
  if(set.size === 0) return;
  const schema = DATA_SCHEMAS[category];
  const rows = buildCategoryRows(category).filter(r => set.has(r[0]));
  const header = schema.headers.map(csvEscape).join(',');
  const lines = rows.map(r => r.map(csvEscape).join(','));
  const csv = '\uFEFF' + [header, ...lines].join('\r\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'selected_' + category + '_' + todayIso() + '.csv';
  a.click();
}
function bulkDeleteSelectedFees(){
  const set = getSelectedSet('fees');
  if(set.size === 0) return;
  if(!confirm('Delete ' + set.size + ' selected fee record(s)? This cannot be undone.')) return;
  fees = fees.filter(f => !set.has(f.id));
  set.clear();
  saveAll();
  renderApp();
}
function bulkDeleteSelectedSalary(){
  const set = getSelectedSet('salary');
  if(set.size === 0) return;
  if(!confirm('Delete ' + set.size + ' selected salary record(s)? This cannot be undone.')) return;
  salaries = salaries.filter(r => !set.has(r.id));
  set.clear();
  saveAll();
  renderApp();
}
function bulkDeleteSelectedExpenses(){
  const set = getSelectedSet('expenses');
  if(set.size === 0) return;
  if(!confirm('Delete ' + set.size + ' selected expense(s)? This cannot be undone.')) return;
  expenses = expenses.filter(e => !set.has(e.id));
  set.clear();
  saveAll();
  renderApp();
}
function bulkDeleteSelectedStaff(){
  const set = getSelectedSet('staff');
  if(set.size === 0) return;
  if(!confirm('Delete ' + set.size + ' selected staff record(s)? This cannot be undone.')) return;
  staffList = staffList.filter(m => !set.has(m.id));
  set.clear();
  saveAll();
  renderApp();
}

/* ---------------- students: add/edit modal ---------------- */
function openStudentModal(existingId, presetCls){
  const s = existingId ? students.find(x=>x.id===existingId) : null;
  const isNew = !s;
  const v = (name, fallback) => escapeHtml(s ? s[name] : (fallback||''));
  const photoPreview = s && s.photo ? `<img src="${s.photo}" alt="" style="width:56px;height:56px;border-radius:8px;object-fit:cover;display:block;margin-bottom:6px;" />` : '';
  const docNote = s && s.documentName ? `<p style="font-size:12px;color:var(--ink-soft);margin:4px 0 0;">Current file: ${escapeHtml(s.documentName)}</p>` : '';

  openModal(`
    <div class="modal-head"><h2 style="font-size:18px;">${s?'Edit student':'Add student — Admission Form'}</h2><button onclick="closeModal()">&times;</button></div>
    <form id="studentForm">
      <div class="form-grid">

        <div class="section-title">Admission Form</div>
        <div class="field"><label>SSSM ID (Personal, 9-digit)</label><input name="studentSSSM" value="${v('studentSSSM')}" data-restrict="digits:9" maxlength="9" inputmode="numeric" /></div>
        <div class="field"><label>FID No. (Farmer ID)</label><input name="studentFID" value="${v('studentFID')}" data-restrict="digits" inputmode="numeric" /></div>
        <div class="field"><label>Aadhar No.</label><input name="studentAadhar" value="${v('studentAadhar')}" data-restrict="digits:12" maxlength="12" inputmode="numeric" /></div>
        <div class="field"><label>Medium</label><input name="medium" value="${v('medium','English Medium')}" /></div>
        <div class="field"><label>First name</label><input name="firstName" value="${v('firstName')}" data-restrict="letters" required /></div>
        <div class="field"><label>Last name</label><input name="lastName" value="${v('lastName')}" data-restrict="letters" required /></div>
        <div class="field"><label>Date of birth</label><input type="date" name="dob" value="${v('dob')}" required /></div>
        <div class="field"><label>Place of birth</label><input name="placeOfBirth" value="${v('placeOfBirth')}" placeholder="Enclose birth certificate" /></div>
        <div class="field"><label>Father's name</label><input name="fatherName" value="${v('fatherName')}" data-restrict="letters" /></div>
        <div class="field"><label>Father's education</label><input name="fatherEducation" value="${v('fatherEducation')}" /></div>
        <div class="field"><label>Father's occupation</label><input name="fatherOccupation" value="${v('fatherOccupation')}" /></div>
        <div class="field"><label>Mother's name</label><input name="motherName" value="${v('motherName')}" data-restrict="letters" /></div>
        <div class="field"><label>Mother's education</label><input name="motherEducation" value="${v('motherEducation')}" /></div>
        <div class="field"><label>Mother's occupation</label><input name="motherOccupation" value="${v('motherOccupation')}" /></div>
        <div class="field span2"><label>Parent's / Guardian's address</label><input name="address" value="${v('address')}" /></div>
        <div class="field"><label>WhatsApp mobile</label><input name="whatsapp" value="${v('whatsapp')}" /></div>
        <div class="field span2"><label>Permanent address</label><input name="permanentAddress" value="${v('permanentAddress')}" /></div>
        <div class="field"><label>Mobile no.</label><input name="phone" value="${v('phone')}" /></div>
        <div class="field"><label>Religion</label><input name="religion" value="${v('religion')}" /></div>
        <div class="field"><label>Caste</label><input name="caste" value="${v('caste')}" /></div>
        <div class="field"><label>Mother tongue</label><input name="motherTongue" value="${v('motherTongue','Hindi')}" /></div>
        <div class="field"><label>Nationality</label><input name="nationality" value="${v('nationality','Indian')}" /></div>
        <div class="field"><label>Category (ST/SC/OBC/GEN)</label><select name="category">${['General','OBC','SC','ST'].map(c=>`<option ${s?.category===c?'selected':''}>${c}</option>`).join('')}</select></div>
        <div class="field span2"><label>Name of last school attended</label><input name="previousSchool" value="${v('previousSchool')}" /></div>
        <div class="field"><label>Result of last examination</label><input name="previousResult" value="${v('previousResult')}" /></div>
        <div class="field"><label>Previous class</label><input name="previousClassStudied" value="${v('previousClassStudied')}" /></div>
        <div class="field"><label>Previous session</label><input name="previousSession" value="${v('previousSession')}" /></div>

        <div class="section-title">For Office Use</div>
        <div class="field"><label>Class</label><select name="cls" required>
          <option value="">Select class</option>
          ${CLASS_LEVELS.map(c=>`<option value="${c}" ${(s?s.cls===c:presetCls===c)?'selected':''}>${c}${BOARD_CLASSES.includes(c)?' (Board class)':''}</option>`).join('')}
        </select></div>
        <div class="field"><label>Section</label><input name="section" value="${v('section')}" placeholder="e.g. B" required /></div>
        <div class="field"><label>Admission date</label><input type="date" name="admissionDate" value="${s?.admissionDate||todayIso()}" required /></div>
        <div class="field"><label>Amount paid at admission (&#8377;)</label><input name="admissionFeesPaid" value="${v('admissionFeesPaid')}" placeholder="0 if none yet" /></div>
        <div class="field"><label>Finalized Fee Amount (&#8377;)</label>
          <input name="yearlyFeesPaid" value="${v('yearlyFeesPaid')}" ${(s && s.yearlyFeesPaid && !(currentUser()&&currentUser().role==='admin')) ? 'readonly' : ''} />
          ${(s && s.yearlyFeesPaid) ? `<p style="font-size:11px;color:var(--ink-soft);margin:4px 0 0;">${s.feeAllocated ? 'Already allocated to terms.' : 'Locked at admission.'}${currentUser()&&currentUser().role==='admin' ? ' You can still edit this as Admin.' : ' Only Admin can change this now.'} Use "Allocate to Terms" in the student's Fees section to break it into term-wise records.</p>` : ''}
        </div>
        ${isNew ? `<p class="field span2" style="font-size:11px;color:var(--ink-soft);margin:-6px 0 0;">If no amount is entered above, this form is saved as a New Enquiry instead of an admission — the school's fee terms require an installment before enrollment is confirmed.</p>` : ''}

        <div class="section-title">Photo &amp; documents</div>
        <div class="field">
          <label>Passport size photo</label>
          ${photoPreview}
          ${fileInputWithClear('studentPhotoFile','photoFile','image/*')}
        </div>
        <div class="field">
          <label>Upload document</label>
          ${fileInputWithClear('studentDocumentFile','documentFile')}
          ${docNote}
          <p style="font-size:11px;color:var(--ink-soft);margin:4px 0 0;">e.g. birth certificate, transfer certificate</p>
        </div>

        ${!isNew ? `
        <div class="section-title">Additional details</div>
        <div class="field"><label>Gender</label><select name="gender">${['Female','Male','Other'].map(g=>`<option ${s?.gender===g?'selected':''}>${g}</option>`).join('')}</select></div>
        <div class="field"><label>Blood group</label><input name="bloodGroup" value="${v('bloodGroup')}" /></div>
        <div class="field"><label>Weight (kg)</label><input name="weight" value="${v('weight')}" /></div>
        <div class="field"><label>Height (cm)</label><input name="height" value="${v('height')}" /></div>
        <div class="field"><label>Roll number</label><input name="rollNumber" value="${v('rollNumber')}" /></div>
        <div class="field"><label>Current session</label><input name="session" value="${v('session', currentAcademicYear())}" placeholder="e.g. 2026-27" /></div>
        <div class="field"><label>Status</label><select name="status"><option value="active" ${(!s||s.status==='active')?'selected':''}>Active</option><option value="inactive" ${s?.status==='inactive'?'selected':''}>Inactive</option></select></div>
        <div class="field"><label>Email</label><input type="email" name="email" value="${v('email')}" /></div>
        <div class="field"><label>City</label><input name="city" value="${v('city')}" /></div>
        <div class="field"><label>Pin code</label><input name="pincode" value="${v('pincode')}" /></div>

        <div class="section-title">Government IDs</div>
        <div class="field"><label>Family SSSM ID (8-digit)</label><input name="familySSSM" value="${v('familySSSM')}" data-restrict="digits:8" maxlength="8" inputmode="numeric" /></div>
        <div class="field"><label>Student's PEN card</label><input name="studentPEN" value="${v('studentPEN')}" /></div>
        <div class="field span2"><label>Student's APAR ID</label><input name="studentAPAR" value="${v('studentAPAR')}" /></div>
        <div class="field"><label>Father's Aadhar no.</label><input name="fatherAadhar" value="${v('fatherAadhar')}" data-restrict="digits:12" maxlength="12" inputmode="numeric" /></div>
        <div class="field"><label>Mother's Aadhar no.</label><input name="motherAadhar" value="${v('motherAadhar')}" data-restrict="digits:12" maxlength="12" inputmode="numeric" /></div>

        <div class="section-title">Parent / guardian (additional)</div>
        <div class="field"><label>Father's phone</label><input name="fatherPhone" value="${v('fatherPhone')}" /></div>
        <div class="field"><label>Mother's phone</label><input name="motherPhone" value="${v('motherPhone')}" /></div>
        <div class="field"><label>Guardian's name</label><input name="guardianName" value="${v('guardianName')}" data-restrict="letters" /></div>
        <div class="field"><label>Relationship with student</label><input name="guardianRelation" value="${v('guardianRelation')}" /></div>
        <div class="field span2"><label>Guardian's phone</label><input name="guardianPhone" value="${v('guardianPhone')}" /></div>

        <div class="section-title">Bank details</div>
        <div class="field"><label>Student's bank account no.</label><input name="bankAccountNumber" value="${v('bankAccountNumber')}" /></div>
        <div class="field"><label>Bank name</label><input name="bankName" value="${v('bankName')}" /></div>
        <div class="field span2"><label>IFSC code</label><input name="ifscCode" value="${v('ifscCode')}" /></div>

        <div class="section-title">Transport</div>
        <div class="field span2"><label>Mode of transport</label>
          <select name="transportMode">${['Student itself','By the parent','Picked up by named person','School driver'].map(t=>`<option ${s?.transportMode===t?'selected':''}>${t}</option>`).join('')}</select>
        </div>
        <div class="field"><label>Picked up by — name</label><input name="pickupPersonName" value="${v('pickupPersonName')}" placeholder="if not the parent" /></div>
        <div class="field"><label>Picked up by — phone</label><input name="pickupPersonPhone" value="${v('pickupPersonPhone')}" /></div>
        <div class="field"><label>Driver's name</label><input name="driverName" value="${v('driverName')}" placeholder="if using school transport" /></div>
        <div class="field"><label>Driver's phone</label><input name="driverPhone" value="${v('driverPhone')}" /></div>
        <div class="field span2"><label>Vehicle no.</label><input name="vehicleNumber" value="${v('vehicleNumber')}" /></div>
        ` : `
        <div class="section-title">More details</div>
        <p style="grid-column:1/-1;font-size:12px;color:var(--ink-soft);margin:0;">Roll number, gender, blood group, transport, bank details, and other records become editable once this student is saved — open their profile and click <strong>Edit</strong> afterward.</p>
        `}

      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">${s?'Save changes':'Add student'}</button>
      </div>
    </form>`);
  document.getElementById('studentForm').addEventListener('submit', async function(e){
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.target).entries());
    const photoFile = e.target.elements.namedItem('photoFile').files[0];
    const docFile = e.target.elements.namedItem('documentFile').files[0];
    delete fd.photoFile;
    delete fd.documentFile;
    fd.photo = photoFile ? await fileToBase64(photoFile) : (s ? s.photo : null);
    if(docFile){
      fd.documentBase64 = await fileToBase64(docFile);
      fd.documentName = docFile.name;
    } else if(s){
      fd.documentBase64 = s.documentBase64;
      fd.documentName = s.documentName;
    }

    let newStudentId = null;
    let routedToEnquiry = false;
    if(s){
      Object.assign(s, fd);
    } else if((!fd.admissionFeesPaid || Number(fd.admissionFeesPaid) <= 0) && !pendingConversion){
      // No installment recorded at submission — per school policy this isn't a confirmed
      // admission yet, so it's logged as an Enquiry instead of a Student record.
      const enq = {
        id: uid('enq'),
        enquiryNumber: 'ENQ-' + new Date().getFullYear() + '-' + String(enquiries.length+1).padStart(3,'0'),
        childName: `${fd.firstName||''} ${fd.lastName||''}`.trim(),
        dob: fd.dob || '',
        classApplyingFor: fd.cls || '',
        parentName: fd.fatherName || fd.motherName || fd.guardianName || '',
        parentPhone: fd.fatherPhone || fd.motherPhone || fd.phone || fd.whatsapp || '',
        source: 'Walk-in',
        nextFollowUpDate: '',
        note: fd.note || '',
        status: 'new',
        followUps: [{date: todayIso(), note: 'Admission form filled but no installment paid yet — auto-logged as an enquiry.'}],
        convertedStudentId: null,
        createdAt: new Date().toISOString(),
      };
      enquiries.push(enq);
      routedToEnquiry = true;
    } else if((!fd.admissionFeesPaid || Number(fd.admissionFeesPaid) <= 0) && pendingConversion){
      alert("This enquiry can't be converted yet — record an installment amount to confirm the admission.");
      pendingConversion = null;
      return;
    } else {
      const year = fd.admissionDate ? fd.admissionDate.slice(0,4) : new Date().getFullYear();
      fd.id = uid('stu');
      fd.admissionNumber = 'CND/' + year + '/' + String(students.length+1).padStart(3,'0');
      fd.status = 'active';
      fd.tc = {issued:false};
      students.push(fd);
      newStudentId = fd.id;
      fees.push({
        id: uid('fee'), studentId: fd.id, session: currentAcademicYear(), particulars: 'Admission Fee',
        amountDue: fd.admissionFeesPaid, amountPaid: fd.admissionFeesPaid, paymentMode: 'Cash',
        negotiated: false, dueDate: fd.admissionDate||todayIso(), paidDate: fd.admissionDate||todayIso(), notes: 'Recorded automatically from the Admission Form.',
      });
    }
    if(newStudentId && pendingConversion){
      const enq = enquiries.find(x=>x.id===pendingConversion);
      if(enq){ enq.status = 'admitted'; enq.convertedStudentId = newStudentId; }
    }
    pendingConversion = null;
    saveAll();
    closeModal();
    if(routedToEnquiry){
      alert('No installment was recorded, so this was saved as a New Enquiry instead of an admission — you can convert it once a payment comes in.');
      renderEnquiries(document.getElementById('topbar'),document.getElementById('content'));
    }
    else if(newStudentId) goToStudent(newStudentId);
    else if(view.name==='studentDetail' && s) renderStudentDetail(document.getElementById('topbar'),document.getElementById('content'), s.id);
    else renderStudents(document.getElementById('topbar'),document.getElementById('content'));
  });
}
function deleteStudent(id){
  if(!confirm('Delete this student record? This cannot be undone.')) return;
  students = students.filter(s=>s.id!==id);
  saveAll();
  goTo('students');
}

/* ================================================================================
   UNIFIED DATA SCHEMA — the single source of truth for every category's column
   list. Export writes exactly these headers, in this order. Import checks the
   uploaded file's header row against this exact list before touching any data —
   if a single header is missing, misspelled, or extra, the import is refused
   with a clear message instead of silently guessing. To add a field to a
   category, add it to its `headers` array here and to the matching row-builder
   below — nothing else in the app needs to change.
   Everything here is plain browser JavaScript: FileReader to read a file,
   Blob + an <a download> link to write one. No external library, no network
   call, works completely offline.
   ================================================================================ */
/** Every field on the real admission form, in the same order the form itself
 *  uses. Students and Admissions share this list — Admissions is simply
 *  Students filtered to the current session. Add a field to the form? Add
 *  its name here once and both export and import pick it up automatically. */
/** Converts a loosely-formatted date (11/5/2015, 11-07-26, etc.) into strict
 *  ISO YYYY-MM-DD, which is the only format <input type="date"> will display.
 *  Assumes DD/MM/YYYY (the Indian convention) when a date is ambiguous — e.g.
 *  "11/07/26" is read as 11 July 2026, not November 7. A 2-digit year under
 *  50 is read as 20xx, otherwise 19xx. Returns '' if it can't make sense of it,
 *  rather than guessing wrong. */
function parseFlexibleDate(raw){
  if(raw===null || raw===undefined) return '';
  const s = String(raw).trim();
  if(!s) return '';
  if(/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  const m = s.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})$/);
  if(m){
    let day = Number(m[1]), month = Number(m[2]), year = Number(m[3]);
    if(year < 100) year += (year < 50 ? 2000 : 1900);
    if(day > 12 && day <= 31 && month <= 12){ /* day is unambiguous, keep as-is */ }
    else if(month > 12 && month <= 31 && day <= 12){ const t = day; day = month; month = t; }
    if(month < 1 || month > 12 || day < 1 || day > 31) return '';
    return year + '-' + String(month).padStart(2,'0') + '-' + String(day).padStart(2,'0');
  }
  const d = new Date(s);
  if(!isNaN(d.getTime()) && /[a-zA-Z]/.test(s)) return d.toISOString().slice(0,10);
  return '';
}
/** Normalizes a loosely-typed class value ("6th", "Class 6", "VI", "kg 1") to
 *  the exact string CLASS_LEVELS uses, so the class dropdown actually selects
 *  it instead of showing blank. Falls back to the original text (rather than
 *  silently discarding it) if nothing recognizable is found, so it's still
 *  visible and fixable by hand. */
function normalizeClassValue(raw){
  if(!raw) return '';
  const s = String(raw).trim();
  if(!s) return '';
  if(CLASS_LEVELS.includes(s)) return s;
  let lower = s.toLowerCase().replace(/\./g,'').replace(/\s+/g,' ').trim();
  if(/^nur/.test(lower)) return 'Nursery';
  if(/^(kg ?1|kg ?i|lkg)$/.test(lower)) return 'KG-I';
  if(/^(kg ?2|kg ?ii|ukg)$/.test(lower)) return 'KG-II';
  const cleaned = lower.replace(/^class ?/,'').replace(/(st|nd|rd|th)$/,'').trim();
  if(CLASS_LEVELS.includes(cleaned)) return cleaned;
  const romanToNumber = {i:'1',ii:'2',iii:'3',iv:'4',v:'5',vi:'6',vii:'7',viii:'8',ix:'9',x:'10'};
  if(romanToNumber[cleaned]) return romanToNumber[cleaned];
  const numMatch = cleaned.match(/\d+/);
  if(numMatch && CLASS_LEVELS.includes(numMatch[0])) return numMatch[0];
  return s;
}
/** Matches a typed value against a list of exact canonical values, ignoring
 *  case (so "cash" / "CASH" / "Cash" all resolve the same way). Falls back to
 *  the original text if nothing matches, rather than silently discarding it —
 *  an unrecognized value stays visible and fixable instead of disappearing. */
function normalizeToCanonical(raw, canonicalList){
  if(!raw) return '';
  const s = String(raw).trim();
  if(!s) return '';
  if(canonicalList.includes(s)) return s;
  const lower = s.toLowerCase();
  const match = canonicalList.find(c => c.toLowerCase() === lower);
  return match || s;
}
/** Same idea as normalizeToCanonical, but for value/label pairs where the
 *  stored value (e.g. "on_leave") differs from what a human would type
 *  (e.g. "On leave"). Matches against either side, case-insensitively. */
function normalizeToLabeledValue(raw, valueLabelMap){
  if(!raw) return '';
  const s = String(raw).trim();
  if(!s) return '';
  const lower = s.toLowerCase();
  for(const val in valueLabelMap){
    if(val.toLowerCase() === lower || valueLabelMap[val].toLowerCase() === lower) return val;
  }
  return s;
}
/** Converts a loosely-formatted month ("07/2026", "July 2026", "2026/07")
 *  into the strict YYYY-MM the app stores months as. */
function parseFlexibleMonth(raw){
  if(!raw) return '';
  const s = String(raw).trim();
  if(!s) return '';
  if(/^\d{4}-\d{2}$/.test(s)) return s;
  let m = s.match(/^(\d{1,2})[\/\-](\d{4})$/);
  if(m){
    const month = Number(m[1]), year = Number(m[2]);
    if(month>=1 && month<=12) return year + '-' + String(month).padStart(2,'0');
  }
  m = s.match(/^(\d{4})[\/\-](\d{1,2})$/);
  if(m){
    const year = Number(m[1]), month = Number(m[2]);
    if(month>=1 && month<=12) return year + '-' + String(month).padStart(2,'0');
  }
  const monthNames = ['january','february','march','april','may','june','july','august','september','october','november','december'];
  m = s.toLowerCase().match(/^([a-z]+)\s+(\d{4})$/);
  if(m){
    const mi = monthNames.findIndex(mn => mn.startsWith(m[1]));
    if(mi >= 0) return m[2] + '-' + String(mi+1).padStart(2,'0');
  }
  return s;
}
var STUDENT_CSV_FIELDS = ['firstName','lastName','gender','dob','placeOfBirth','studentSSSM','studentFID','studentAadhar','studentPEN','studentAPAR','familySSSM','medium','fatherName','fatherEducation','fatherOccupation','fatherPhone','fatherAadhar','motherName','motherEducation','motherOccupation','motherPhone','motherAadhar','guardianName','guardianRelation','guardianPhone','address','permanentAddress','city','pincode','phone','whatsapp','email','religion','caste','category','motherTongue','nationality','previousSchool','previousClassStudied','previousResult','previousSession','cls','section','rollNumber','admissionNumber','admissionDate','session','status','admissionFeesPaid','yearlyFeesPaid','bloodGroup','height','weight','transportMode','vehicleNumber','pickupPersonName','pickupPersonPhone','driverName','driverPhone','bankName','bankAccountNumber','ifscCode'];
var STUDENT_CSV_HEADERS = ['studentId'].concat(STUDENT_CSV_FIELDS);
var STUDENT_CSV_NO_UPPERCASE = new Set(['dob','admissionDate','previousSession','session','phone','whatsapp','fatherPhone','motherPhone','guardianPhone','pickupPersonPhone','driverPhone','email','studentAadhar','fatherAadhar','motherAadhar','studentSSSM','studentFID','studentPEN','studentAPAR','familySSSM','pincode','admissionNumber','rollNumber','admissionFeesPaid','yearlyFeesPaid','height','weight','bankAccountNumber','status','gender','category','cls','transportMode']);
var DATA_SCHEMAS = {
  students: { label: 'Students', headers: STUDENT_CSV_HEADERS },
  admissions: { label: 'Admissions (current session)', headers: STUDENT_CSV_HEADERS },
  fees: {
    label: 'Fees',
    headers: ['feeId','studentId','session','particulars','amountDue','amountPaid','paymentMode','negotiated','dueDate','paidDate','notes'],
  },
  attendance: {
    label: 'Attendance',
    headers: ['attendanceId','studentId','date','cls','section','status'],
  },
  enquiries: {
    label: 'Enquiries',
    headers: ['enquiryId','childName','dob','classApplyingFor','parentName','parentPhone','source','status','nextFollowUpDate','note','createdAt'],
  },
  staff: {
    label: 'Staff',
    headers: ['employeeId','firstName','lastName','role','department','phone','email','dateOfJoining','employmentStatus'],
  },
  salary: {
    label: 'Salary',
    headers: ['salaryId','staffId','month','amountDue','amountPaid','paidDate','notes'],
  },
  expenses: {
    label: 'Expenses',
    headers: ['expenseId','date','category','description','amount','paymentMode','notes'],
  },
  exams: {
    label: 'Exams',
    headers: ['examId','name','cls','session','examDate','resultDate','status'],
  },
  examMarks: {
    label: 'Exam Marks',
    headers: ['markId','examId','studentId','subjectName','maxMarks','passMarks','marksObtained','remarks'],
  },
};
/** Student rows are shared by both the Students and Admissions modules —
 *  Admissions is simply Students filtered to the current session. */
function buildStudentRow(s){
  return [s.id].concat(STUDENT_CSV_FIELDS.map(f => s[f]!=null ? s[f] : ''));
}
function buildCategoryRows(category){
  if(category === 'students') return students.map(buildStudentRow);
  if(category === 'admissions'){
    const session = currentAcademicYear();
    return students.filter(s=>s.session===session).map(buildStudentRow);
  }
  if(category === 'fees') return fees.map(f => [f.id, f.studentId||'', f.session||'', f.particulars||'', f.amountDue||'', f.amountPaid||'', f.paymentMode||'', f.negotiated?'true':'false', f.dueDate||'', f.paidDate||'', f.notes||'']);
  if(category === 'attendance') return studentAttendance.map(a => [a.id, a.studentId||'', a.date||'', a.cls||'', a.section||'', a.status||'']);
  if(category === 'enquiries') return enquiries.map(e => [e.id, e.childName||'', e.dob||'', e.classApplyingFor||'', e.parentName||'', e.parentPhone||'', e.source||'', e.status||'', e.nextFollowUpDate||'', e.note||'', e.createdAt||'']);
  if(category === 'staff') return staffList.map(m => [m.id, m.firstName||'', m.lastName||'', m.role||'', m.department||'', m.phone||'', m.email||'', m.dateOfJoining||'', m.employmentStatus||'']);
  if(category === 'salary') return salaries.map(r => [r.id, r.staffId||'', r.month||'', r.amountDue||'', r.amountPaid||'', r.paidDate||'', r.notes||'']);
  if(category === 'expenses') return expenses.map(e => [e.id, e.date||'', e.category||'', e.description||'', e.amount||'', e.paymentMode||'', e.notes||'']);
  if(category === 'exams') return exams.map(e => [e.id, e.name||'', e.cls||'', e.session||'', e.examDate||'', e.resultDate||'', e.status||'']);
  if(category === 'examMarks'){
    const rows = [];
    exams.forEach(e => {
      const roster = students.filter(s=>s.cls===e.cls);
      roster.forEach(s => {
        e.subjects.forEach(sub => {
          const m = examMarks.find(x=>x.examId===e.id && x.studentId===s.id && x.subjectName===sub.name);
          rows.push([m?m.id:'', e.id, s.id, sub.name, sub.maxMarks, sub.passMarks, m?m.marksObtained:'', m?m.remarks||'':'']);
        });
      });
    });
    return rows;
  }
  return [];
}
/** Reads a File object as text using the browser's native FileReader — no library needed. */
function readFileAsText(file){
  return file.text();
}
/** Minimal, dependency-free CSV parser. Handles quoted fields containing
 *  commas, quotes, or newlines — the cases a naive String.split(',') breaks on. */
function parseCsvText(text){
  const rows = [];
  let row = [], field = '', inQuotes = false;
  for(let i=0; i<text.length; i++){
    const c = text[i];
    if(inQuotes){
      if(c === '"'){
        if(text[i+1] === '"'){ field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else {
      if(c === '"') inQuotes = true;
      else if(c === ',') { row.push(field); field = ''; }
      else if(c === '\r') { /* ignore, newline handled on \n */ }
      else if(c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else field += c;
    }
  }
  if(field.length > 0 || row.length > 0){ row.push(field); rows.push(row); }
  return rows.filter(r => !(r.length===1 && r[0].trim()===''));
}
/** Builds one internal record from one CSV data row, using the header row
 *  to look up each field BY NAME (not column position) — this only runs
 *  after the header set has already been validated as an exact match. */
function importCategoryRows(category, headerRow, dataRows){
  const idx = {};
  headerRow.forEach((h,i) => { idx[h] = i; });
  let created = 0, updated = 0, skipped = 0;

  if(category === 'students' || category === 'admissions'){
    dataRows.forEach(row => {
      if(row.every(c=>String(c).trim()==='')) return;
      const rec = {};
      STUDENT_CSV_FIELDS.forEach(f => {
        let val = (row[idx[f]]||'').trim();
        if(f === 'dob' || f === 'admissionDate'){ val = parseFlexibleDate(val); }
        else if(f === 'cls'){ val = normalizeClassValue(val); }
        else if(val && !STUDENT_CSV_NO_UPPERCASE.has(f)){ val = val.toUpperCase(); }
        rec[f] = val;
      });
      if(!rec.status) rec.status = 'active';
      if(!rec.firstName){ skipped++; return; }
      const studentId = (row[idx.studentId]||'').trim();
      const existing = studentId ? students.find(s=>s.id===studentId) : null;
      if(existing){
        Object.assign(existing, rec);
        updated++;
      } else {
        rec.id = uid('stu');
        if(!rec.whatsapp) rec.whatsapp = rec.phone;
        if(!rec.medium) rec.medium = 'ENGLISH MEDIUM';
        if(!rec.session) rec.session = currentAcademicYear();
        if(!rec.motherTongue) rec.motherTongue = 'HINDI';
        if(!rec.nationality) rec.nationality = 'INDIAN';
        rec.tc = {issued:false};
        students.push(rec);
        created++;
      }
    });
    saveAll();
  } else if(category === 'fees'){
    dataRows.forEach(row => {
      if(row.every(c=>String(c).trim()==='')) return;
      const studentId = (row[idx.studentId]||'').trim();
      if(!studentId){ skipped++; return; }
      const rec = {
        studentId,
        session: (row[idx.session]||'').trim(),
        particulars: normalizeToCanonical((row[idx.particulars]||'').trim(), TERMS),
        amountDue: (row[idx.amountDue]||'0').trim(),
        amountPaid: (row[idx.amountPaid]||'0').trim(),
        paymentMode: normalizeToCanonical((row[idx.paymentMode]||'').trim(), ['Cash','Online','Cheque']),
        negotiated: /^(true|yes|1)$/i.test((row[idx.negotiated]||'').trim()),
        dueDate: parseFlexibleDate((row[idx.dueDate]||'').trim()),
        paidDate: parseFlexibleDate((row[idx.paidDate]||'').trim()),
        notes: (row[idx.notes]||'').trim(),
      };
      const feeId = (row[idx.feeId]||'').trim();
      const existing = feeId ? fees.find(f=>f.id===feeId) : null;
      if(existing){ Object.assign(existing, rec); updated++; }
      else { rec.id = uid('fee'); fees.push(rec); created++; }
    });
    saveAll();
  } else if(category === 'attendance'){
    dataRows.forEach(row => {
      if(row.every(c=>String(c).trim()==='')) return;
      const studentId = (row[idx.studentId]||'').trim();
      const date = parseFlexibleDate((row[idx.date]||'').trim());
      if(!studentId || !date){ skipped++; return; }
      const rawStatus = (row[idx.status]||'A').trim();
      const rec = {
        studentId, date,
        cls: normalizeClassValue((row[idx.cls]||'').trim()),
        section: (row[idx.section]||'').trim().toUpperCase(),
        status: normalizeToLabeledValue(rawStatus, {P:'Present', A:'Absent', L:'Leave'}) || 'A',
      };
      const attendanceId = (row[idx.attendanceId]||'').trim();
      const existing = attendanceId ? studentAttendance.find(a=>a.id===attendanceId) : null;
      if(existing){ Object.assign(existing, rec); updated++; }
      else { rec.id = uid('satt'); studentAttendance.push(rec); created++; }
    });
    saveAll();
  } else if(category === 'enquiries'){
    dataRows.forEach(row => {
      if(row.every(c=>String(c).trim()==='')) return;
      const childName = (row[idx.childName]||'').trim().toUpperCase();
      if(!childName){ skipped++; return; }
      const rawCreatedAt = (row[idx.createdAt]||'').trim();
      const parsedCreatedDate = parseFlexibleDate(rawCreatedAt);
      const rec = {
        childName,
        dob: parseFlexibleDate((row[idx.dob]||'').trim()),
        classApplyingFor: normalizeClassValue((row[idx.classApplyingFor]||'').trim()),
        parentName: (row[idx.parentName]||'').trim().toUpperCase(),
        parentPhone: (row[idx.parentPhone]||'').trim(),
        source: normalizeToCanonical((row[idx.source]||'').trim(), ['Walk-in','Phone','Referral','Website','Social media']) || 'Walk-in',
        status: normalizeToLabeledValue((row[idx.status]||'').trim(), STAGE_LABELS) || 'new',
        nextFollowUpDate: parseFlexibleDate((row[idx.nextFollowUpDate]||'').trim()),
        note: (row[idx.note]||'').trim(),
        createdAt: parsedCreatedDate ? parsedCreatedDate + 'T00:00:00.000Z' : (rawCreatedAt || new Date().toISOString()),
      };
      const enquiryId = (row[idx.enquiryId]||'').trim();
      const existing = enquiryId ? enquiries.find(e=>e.id===enquiryId) : null;
      if(existing){ Object.assign(existing, rec); updated++; }
      else {
        rec.id = uid('enq');
        rec.enquiryNumber = 'ENQ-' + new Date().getFullYear() + '-' + String(enquiries.length+1).padStart(3,'0');
        rec.followUps = []; rec.convertedStudentId = null;
        enquiries.push(rec); created++;
      }
    });
    saveAll();
  } else if(category === 'staff'){
    dataRows.forEach(row => {
      if(row.every(c=>String(c).trim()==='')) return;
      const firstName = (row[idx.firstName]||'').trim();
      if(!firstName){ skipped++; return; }
      const rec = {
        firstName, lastName: (row[idx.lastName]||'').trim(),
        role: normalizeToCanonical((row[idx.role]||'').trim(), ['Teacher','Admin','Principal','Support']) || 'Teacher',
        department: (row[idx.department]||'').trim(),
        phone: (row[idx.phone]||'').trim(),
        email: (row[idx.email]||'').trim(),
        dateOfJoining: parseFlexibleDate((row[idx.dateOfJoining]||'').trim()),
        employmentStatus: normalizeToLabeledValue((row[idx.employmentStatus]||'').trim(), {active:'Active', on_leave:'On leave', inactive:'Inactive'}) || 'active',
      };
      const employeeId = (row[idx.employeeId]||'').trim();
      const existing = employeeId ? staffList.find(m=>m.id===employeeId) : null;
      if(existing){ Object.assign(existing, rec); updated++; }
      else {
        rec.id = uid('stf');
        rec.employeeId = 'STF-' + String(staffList.length+1).padStart(3,'0');
        staffList.push(rec); created++;
      }
    });
    saveAll();
  } else if(category === 'salary'){
    dataRows.forEach(row => {
      if(row.every(c=>String(c).trim()==='')) return;
      const staffId = (row[idx.staffId]||'').trim();
      const month = parseFlexibleMonth((row[idx.month]||'').trim());
      if(!staffId || !month){ skipped++; return; }
      const rec = {
        staffId, month,
        amountDue: (row[idx.amountDue]||'0').trim(),
        amountPaid: (row[idx.amountPaid]||'0').trim(),
        paidDate: parseFlexibleDate((row[idx.paidDate]||'').trim()),
        notes: (row[idx.notes]||'').trim(),
      };
      const salaryId = (row[idx.salaryId]||'').trim();
      const existing = salaryId ? salaries.find(r=>r.id===salaryId) : null;
      if(existing){ Object.assign(existing, rec); updated++; }
      else { rec.id = uid('sal'); salaries.push(rec); created++; }
    });
    saveAll();
  } else if(category === 'expenses'){
    dataRows.forEach(row => {
      if(row.every(c=>String(c).trim()==='')) return;
      const description = (row[idx.description]||'').trim();
      if(!description){ skipped++; return; }
      const rec = {
        date: parseFlexibleDate((row[idx.date]||'').trim()) || todayIso(),
        category: normalizeToCanonical((row[idx.category]||'').trim(), EXPENSE_CATEGORIES) || 'Miscellaneous',
        description,
        amount: (row[idx.amount]||'0').trim(),
        paymentMode: normalizeToCanonical((row[idx.paymentMode]||'').trim(), ['Cash','Online','Cheque']) || 'Cash',
        notes: (row[idx.notes]||'').trim(),
      };
      const expenseId = (row[idx.expenseId]||'').trim();
      const existing = expenseId ? expenses.find(e=>e.id===expenseId) : null;
      if(existing){ Object.assign(existing, rec); updated++; }
      else { rec.id = uid('exp'); expenses.push(rec); created++; }
    });
    saveAll();
  } else if(category === 'exams'){
    dataRows.forEach(row => {
      if(row.every(c=>String(c).trim()==='')) return;
      const name = (row[idx.name]||'').trim();
      const cls = normalizeClassValue((row[idx.cls]||'').trim());
      if(!name || !cls){ skipped++; return; }
      const rec = {
        name, cls,
        session: (row[idx.session]||'').trim() || currentAcademicYear(),
        examDate: parseFlexibleDate((row[idx.examDate]||'').trim()),
        resultDate: parseFlexibleDate((row[idx.resultDate]||'').trim()),
        status: (row[idx.status]||'').trim() || 'draft',
      };
      const examId = (row[idx.examId]||'').trim();
      const existing = examId ? exams.find(e=>e.id===examId) : null;
      if(existing){ Object.assign(existing, rec); updated++; }
      else { rec.id = uid('exam'); rec.subjects = []; exams.push(rec); created++; }
    });
    saveAll();
  } else if(category === 'examMarks'){
    dataRows.forEach(row => {
      if(row.every(c=>String(c).trim()==='')) return;
      const examId = (row[idx.examId]||'').trim();
      const studentId = (row[idx.studentId]||'').trim();
      const subjectName = (row[idx.subjectName]||'').trim();
      if(!examId || !studentId || !subjectName){ skipped++; return; }
      const exam = exams.find(e=>e.id===examId);
      if(!exam){ skipped++; return; }
      const maxMarks = Number(row[idx.maxMarks])||100;
      const passMarks = Number(row[idx.passMarks])||33;
      let subject = exam.subjects.find(s=>s.name===subjectName);
      if(!subject){ subject = {name:subjectName, maxMarks, passMarks}; exam.subjects.push(subject); }
      else { subject.maxMarks = maxMarks; subject.passMarks = passMarks; }

      const marksObtained = (row[idx.marksObtained]||'').trim();
      const existingRec = examMarks.find(m=>m.examId===examId && m.studentId===studentId && m.subjectName===subjectName);
      if(marksObtained===''){
        if(existingRec){ examMarks = examMarks.filter(m=>m!==existingRec); updated++; }
        return;
      }
      if(existingRec){ existingRec.marksObtained = marksObtained; existingRec.remarks = (row[idx.remarks]||'').trim(); updated++; }
      else { examMarks.push({id:uid('mark'), examId, studentId, subjectName, marksObtained, remarks:(row[idx.remarks]||'').trim()}); created++; }
    });
    saveAll();
  }
  return { created, updated, skipped };
}
function downloadCategoryCsv(category){
  const schema = DATA_SCHEMAS[category];
  const rows = buildCategoryRows(category);
  const header = schema.headers.map(csvEscape).join(',');
  const lines = rows.map(r => r.map(csvEscape).join(','));
  const csv = '\uFEFF' + [header, ...lines].join('\r\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = category + '_' + todayIso() + '.csv';
  a.click();
}
function renderDataCenter(topbar, content){
  topbar.innerHTML = `<div><h1>Data Center</h1><p>Export or import Students, Admissions, Fees, Attendance, and Enquiries as CSV — one consistent, native format for both directions.</p></div>`;
  content.innerHTML = `
    <div class="card">
      <h2 style="font-size:16px;">Export</h2>
      <p style="font-size:13px;color:var(--ink-soft);margin:6px 0 14px;">Pick which modules to export. Each becomes its own CSV file, with column headers matching the system's fields exactly — the same file this Import below expects back.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px;">
        ${Object.keys(DATA_SCHEMAS).map(cat => `
          <label style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:400;margin:0;">
            <input type="checkbox" class="data-center-export-cb" value="${cat}" style="width:auto;" />
            ${DATA_SCHEMAS[cat].label}
          </label>`).join('')}
      </div>
      <button class="btn btn-primary" onclick="runDataCenterExport()">Export Selected</button>
    </div>

    <div class="card" style="margin-top:20px;">
      <h2 style="font-size:16px;">Import</h2>
      <p style="font-size:13px;color:var(--ink-soft);margin:6px 0 14px;">Choose which module the data is for, then either upload a CSV file or paste a Google Sheet link. The column headers are checked against the exact schema below — if anything doesn't match, nothing is imported and you'll see exactly what's wrong. A row whose "id" column matches an existing record updates it; otherwise a new record is created.</p>
      <div class="field"><label>Module</label>
        <select id="dataCenterImportCategory">
          ${Object.keys(DATA_SCHEMAS).map(cat => `<option value="${cat}">${DATA_SCHEMAS[cat].label}</option>`).join('')}
        </select>
      </div>

      <div style="display:flex;gap:8px;margin-top:14px;">
        <button type="button" id="importTabFileBtn" class="btn btn-primary btn-sm" onclick="switchDataCenterImportTab('file')">CSV file</button>
        <button type="button" id="importTabSheetBtn" class="btn btn-secondary btn-sm" onclick="switchDataCenterImportTab('sheet')">Google Sheet link</button>
      </div>

      <div id="importTabFile" style="margin-top:10px;">
        ${fileInputWithClear('dataCenterImportFile', null, '.csv')}
      </div>
      <div id="importTabSheet" style="margin-top:10px;display:none;">
        <input type="text" id="dataCenterSheetUrl" placeholder="Paste the Google Sheet URL" style="width:100%;" />
        <p style="font-size:11px;color:var(--ink-soft);margin:6px 0 0;">The sheet must be shared as "Anyone with the link can view" (File &rarr; Share &rarr; General access). This reads whichever tab is first in the sheet. If your browser blocks the request, download the sheet as CSV instead (File &rarr; Download &rarr; CSV) and use the CSV file option above.</p>
      </div>

      <button class="btn btn-primary" onclick="runDataCenterImport()" style="margin-top:10px;">Import</button>
      <div id="dataCenterImportResult" style="margin-top:12px;font-size:13px;"></div>
    </div>

    <div class="card" style="margin-top:20px;">
      <h2 style="font-size:16px;">Expected columns</h2>
      <div style="display:grid;gap:10px;margin-top:10px;">
        ${Object.keys(DATA_SCHEMAS).map(cat => `
          <div>
            <p style="font-size:12px;font-weight:600;margin:0 0 3px;">${DATA_SCHEMAS[cat].label}</p>
            <p style="font-size:12px;color:var(--ink-soft);font-family:ui-monospace,SFMono-Regular,Consolas,monospace;margin:0;">${DATA_SCHEMAS[cat].headers.join(', ')}</p>
          </div>`).join('')}
      </div>
    </div>`;
}
function runDataCenterExport(){
  const checked = Array.from(document.querySelectorAll('.data-center-export-cb:checked')).map(cb=>cb.value);
  if(checked.length === 0){ alert('Select at least one module to export.'); return; }
  checked.forEach(cat => downloadCategoryCsv(cat));
}
/** Pulls a Sheet ID out of a pasted Google Sheets URL, or passes through a bare ID unchanged. */
function extractSpreadsheetId(input){
  if(!input) return '';
  const match = String(input).match(/\/d\/([a-zA-Z0-9-_]+)/);
  return match ? match[1] : String(input).trim();
}
var dataCenterImportSource = 'file';
function switchDataCenterImportTab(mode){
  dataCenterImportSource = mode;
  document.getElementById('importTabFile').style.display = mode==='file' ? '' : 'none';
  document.getElementById('importTabSheet').style.display = mode==='sheet' ? '' : 'none';
  document.getElementById('importTabFileBtn').className = 'btn btn-sm ' + (mode==='file'?'btn-primary':'btn-secondary');
  document.getElementById('importTabSheetBtn').className = 'btn btn-sm ' + (mode==='sheet'?'btn-primary':'btn-secondary');
}
async function runDataCenterImport(){
  const category = document.getElementById('dataCenterImportCategory').value;
  const resultEl = document.getElementById('dataCenterImportResult');
  let text;

  if(dataCenterImportSource === 'sheet'){
    const url = document.getElementById('dataCenterSheetUrl').value.trim();
    if(!url){ resultEl.innerHTML = '<span style="color:var(--bad);">Paste a Google Sheet link first.</span>'; return; }
    const sheetId = extractSpreadsheetId(url);
    if(!sheetId){ resultEl.innerHTML = '<span style="color:var(--bad);">Could not find a Sheet ID in that link.</span>'; return; }
    resultEl.innerHTML = '<span style="color:var(--ink-soft);">Fetching from Google Sheets…</span>';
    try{
      const res = await fetch('https://docs.google.com/spreadsheets/d/' + sheetId + '/export?format=csv');
      if(!res.ok){
        resultEl.innerHTML = '<span style="color:var(--bad);">Google Sheets returned an error (' + res.status + '). Make sure the sheet is shared as "Anyone with the link can view" (File &rarr; Share).</span>';
        return;
      }
      text = await res.text();
    }catch(err){
      resultEl.innerHTML = '<span style="color:var(--bad);">Could not fetch that sheet — often a cross-origin restriction on Google\'s side that this app can\'t control. Try File &rarr; Download &rarr; CSV from the sheet instead, then use the CSV file option above.</span>';
      return;
    }
  } else {
    const file = document.getElementById('dataCenterImportFile').files[0];
    if(!file){ resultEl.innerHTML = '<span style="color:var(--bad);">Choose a CSV file first.</span>'; return; }
    if(/\.(xlsx|xls|xlsm)$/i.test(file.name)){
      resultEl.innerHTML = '<span style="color:var(--bad);">This is an Excel file (' + escapeHtml(file.name) + '), not a CSV — this importer only reads plain CSV text. Open it in Excel, Google Sheets, or LibreOffice and use "Save As" / "Download" &rarr; <b>CSV</b>, then upload that .csv file instead.</span>';
      return;
    }
    try{ text = await readFileAsText(file); }
    catch(err){ resultEl.innerHTML = '<span style="color:var(--bad);">Could not read that file.</span>'; return; }
  }

  if(/^PK\x03\x04/.test(text) || /[\x00-\x08\x0E-\x1F]/.test(text.slice(0,2000))){
    resultEl.innerHTML = '<span style="color:var(--bad);">This doesn\'t look like a plain CSV file — it may be a renamed Excel file or another binary format. Please export it as CSV (plain text) and try again.</span>';
    return;
  }

  const cleanText = text.charCodeAt(0)===0xFEFF ? text.slice(1) : text;
  const rows = parseCsvText(cleanText);
  if(rows.length === 0){ resultEl.innerHTML = '<span style="color:var(--bad);">That file is empty.</span>'; return; }

  const headerRow = rows[0].map(h => h.trim());
  const expected = DATA_SCHEMAS[category].headers;
  const missing = expected.filter(h => !headerRow.includes(h));
  const extra = headerRow.filter(h => !expected.includes(h));
  if(missing.length > 0 || extra.length > 0){
    let msg = "These column headers don't match the " + DATA_SCHEMAS[category].label + ' schema.';
    if(missing.length) msg += ' Missing: ' + missing.join(', ') + '.';
    if(extra.length) msg += ' Unexpected: ' + extra.join(', ') + '.';
    resultEl.innerHTML = '<span style="color:var(--bad);">' + escapeHtml(msg) + '</span>';
    return;
  }

  const result = importCategoryRows(category, headerRow, rows.slice(1));
  resultEl.innerHTML = '<span style="color:var(--good);">' + result.created + ' created, ' + result.updated + ' updated' + (result.skipped ? ', ' + result.skipped + ' row(s) skipped (missing a required field)' : '') + '.</span>';
}

/* ---------------- student detail + TC ---------------- */
function renderStudentDetail(topbar, content, id){
  const s = students.find(x=>x.id===id);
  if(!s){ content.innerHTML = `<div class="empty">Student not found.</div>`; return; }

  topbar.innerHTML = `
    <div>
      <button class="btn btn-secondary btn-sm" onclick="goTo('students')" style="margin-bottom:8px;">&larr; All students</button>
      <h1>${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</h1>
      <p>Class ${escapeHtml(s.cls)}${escapeHtml(s.section)} · Roll ${escapeHtml(s.rollNumber||'—')}</p>
    </div>
    <div style="display:flex;gap:8px;">
      ${canEdit('students') ? `
        <button class="btn btn-secondary" onclick="openStudentModal('${s.id}')">Edit</button>
        <button class="btn btn-danger" onclick="deleteStudent('${s.id}')">Delete</button>
      ` : ''}
    </div>`;

  const g2 = (...pairs) => `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;font-size:13px;">${pairs.map(([l,v])=>detailField(l,v||'—')).join('')}</div>`;

  content.innerHTML = `
    <div class="detail-layout">
      <div class="stack">
        <div class="card">
          <div style="display:flex;align-items:center;gap:12px;">
            ${avatarHtml(s.photo, s.firstName, s.lastName, 48)}
            <div>
              <p style="font-family:Georgia,'Times New Roman',serif;font-size:18px;margin:0;">${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</p>
              <span class="record-tag">${escapeHtml(s.admissionNumber)}</span>
            </div>
            <div style="margin-left:auto;">${statusPill(s.status)}</div>
          </div>
          <div style="margin-top:18px;">
            ${g2(['Date of birth', formatDate(s.dob)], ['Place of birth', escapeHtml(s.placeOfBirth)],
                 ['Gender', escapeHtml(s.gender)], ['Blood group', escapeHtml(s.bloodGroup)],
                 ['Nationality', escapeHtml(s.nationality)], ['Religion', escapeHtml(s.religion)],
                 ['Caste', escapeHtml(s.caste)], ['Category', escapeHtml(s.category)],
                 ['Mother tongue', escapeHtml(s.motherTongue)], ['Weight / Height', (s.weight?s.weight+' kg':'—')+' / '+(s.height?s.height+' cm':'—')])}
          </div>
        </div>

        ${can('fees') ? `
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
            <h2 style="font-size:16px;">Fees</h2>
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
              <button class="btn btn-secondary btn-sm" onclick="printStudentFeeRecord('${s.id}')">Print Fee Record</button>
              ${canEdit('fees') && s.yearlyFeesPaid ? `<button class="btn btn-secondary btn-sm" onclick="openAllocateFeeModal('${s.id}')">${s.feeAllocated?'Re-allocate':'Allocate'} to Terms</button>` : ''}
              ${canEdit('fees') ? `<button class="btn btn-secondary btn-sm" onclick="openFeeModal(null,'${s.id}')">+ Add fee record</button>` : ''}
            </div>
          </div>
          ${(() => {
            const rows = fees.filter(f=>f.studentId===s.id).sort((a,b)=>(a.dueDate||'').localeCompare(b.dueDate||''));
            const totalDue = rows.reduce((sum,f)=>sum+(Number(f.amountDue)||0),0);
            const totalPaid = rows.reduce((sum,f)=>sum+(Number(f.amountPaid)||0),0);
            const totalRemaining = Math.max(0, totalDue-totalPaid);
            const summary = `
              <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:12px 0 6px;">
                <div style="text-align:center;background:var(--surface-alt);border-radius:8px;padding:10px;">
                  <div style="font-size:10px;text-transform:uppercase;letter-spacing:.03em;color:var(--ink-soft);">Total</div>
                  <div style="font-family:Georgia,'Times New Roman',serif;font-size:20px;">${money(totalDue)}</div>
                </div>
                <div style="text-align:center;background:var(--good-soft);border-radius:8px;padding:10px;">
                  <div style="font-size:10px;text-transform:uppercase;letter-spacing:.03em;color:var(--good);">Paid</div>
                  <div style="font-family:Georgia,'Times New Roman',serif;font-size:20px;color:var(--good);">${money(totalPaid)}</div>
                </div>
                <div style="text-align:center;background:var(--bad-soft);border-radius:8px;padding:10px;">
                  <div style="font-size:10px;text-transform:uppercase;letter-spacing:.03em;color:var(--bad);">Remaining</div>
                  <div style="font-family:Georgia,'Times New Roman',serif;font-size:20px;color:var(--bad);">${money(totalRemaining)}</div>
                </div>
              </div>`;
            if(rows.length===0) return summary + `<p style="font-size:13px;color:var(--ink-soft);margin-top:6px;">No fee records yet.</p>`;
            return summary + `<div style="margin-top:6px;font-size:13px;">${rows.map(f => `
              <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-top:1px solid var(--line);">
                <div>
                  <span style="font-weight:500;">${escapeHtml(f.particulars)}</span>
                  <span style="color:var(--ink-soft);"> · ${escapeHtml(f.session)}${f.paymentMode?' · '+escapeHtml(f.paymentMode):''}</span>
                  <div style="color:var(--ink-soft);font-size:12px;">${money(f.amountPaid)} of ${money(f.amountDue)} · due ${formatDate(f.dueDate)}</div>
                </div>
                <div style="display:flex;align-items:center;gap:8px;">
                  ${feeStatusPill(f)}
                  ${Number(f.amountPaid)>0 ? `<button class="btn btn-secondary btn-sm" onclick="printFeeReceipt('${f.id}')">Receipt</button>` : ''}
                  ${canEdit('fees') ? `<button class="btn btn-secondary btn-sm" onclick="openFeeModal('${f.id}')">Edit</button>` : ''}
                </div>
              </div>`).join('')}</div>`;
          })()}
        </div>
        ` : ''}

        ${can('exams') ? `
        <div class="card">
          <h2 style="font-size:16px;">Report Cards</h2>
          ${(() => {
            const studentExams = exams.filter(e=>e.cls===s.cls).sort((a,b)=>(b.examDate||'').localeCompare(a.examDate||''));
            if(studentExams.length===0) return `<p style="font-size:13px;color:var(--ink-soft);margin-top:8px;">No exams recorded for ${classDisplayLabel(s.cls)} yet.</p>`;
            return `<div style="margin-top:8px;">${studentExams.map(e => {
              const totals = computeStudentExamTotals(e.id, s.id);
              return `
              <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-top:1px solid var(--line);">
                <div>
                  <span style="font-weight:500;">${escapeHtml(e.name)}</span>
                  <span style="color:var(--ink-soft);"> · ${escapeHtml(e.session)}</span>
                  ${totals.isComplete ? `<div style="color:var(--ink-soft);font-size:12px;">${totals.percentage.toFixed(1)}% · Grade ${computeGrade(totals.percentage)}</div>` : `<div style="color:var(--ink-soft);font-size:12px;">${totals.subjectsWithMarks}/${totals.totalSubjects} subjects entered</div>`}
                </div>
                ${totals.isComplete ? `<button class="btn btn-secondary btn-sm" onclick="printReportCard('${s.id}','${e.id}')">Report Card</button>` : `<button class="btn btn-secondary btn-sm" onclick="goToExam('${e.id}')">View exam</button>`}
              </div>`;
            }).join('')}</div>`;
          })()}
        </div>
        ` : ''}

        <div class="card">
          <h2 style="font-size:16px;">Academic</h2>
          <div style="margin-top:12px;">
            ${g2(['Class / Section', escapeHtml(s.cls)+escapeHtml(s.section)], ['Roll number', escapeHtml(s.rollNumber)],
                 ['Medium', escapeHtml(s.medium)], ['Session', escapeHtml(s.session)],
                 ['Admission date', formatDate(s.admissionDate)], ['Fees paid (admission / yearly)', (s.admissionFeesPaid||'—')+' / '+(s.yearlyFeesPaid||'—')],
                 ['Previous school', escapeHtml(s.previousSchool)], ['Previous class / session', escapeHtml(s.previousClassStudied)+(s.previousSession?' · '+escapeHtml(s.previousSession):'')],
                 ['Result of last exam', escapeHtml(s.previousResult)], ['', ''])}
          </div>
        </div>

        <div class="card">
          <h2 style="font-size:16px;">Contact &amp; address</h2>
          <div style="margin-top:12px;">
            ${g2(['Phone', escapeHtml(s.phone)], ['WhatsApp', escapeHtml(s.whatsapp)],
                 ['Email', escapeHtml(s.email)], ['City / Pin code', escapeHtml(s.city)+(s.pincode?' · '+escapeHtml(s.pincode):'')])}
            ${detailField('Address', escapeHtml(s.address)||'—')}
            ${s.permanentAddress ? detailField('Permanent address', escapeHtml(s.permanentAddress)) : ''}
          </div>
        </div>

        <div class="card">
          <h2 style="font-size:16px;">Parent / guardian</h2>
          <div style="margin-top:12px;">
            ${g2(['Father', s.fatherName?escapeHtml(s.fatherName)+(s.fatherPhone?' · '+escapeHtml(s.fatherPhone):''):'—'],
                 ['Father — education / occupation', escapeHtml(s.fatherEducation)+(s.fatherOccupation?' · '+escapeHtml(s.fatherOccupation):'')],
                 ['Mother', s.motherName?escapeHtml(s.motherName)+(s.motherPhone?' · '+escapeHtml(s.motherPhone):''):'—'],
                 ['Mother — education / occupation', escapeHtml(s.motherEducation)+(s.motherOccupation?' · '+escapeHtml(s.motherOccupation):'')],
                 ['Guardian', s.guardianName?escapeHtml(s.guardianName)+(s.guardianRelation?' ('+escapeHtml(s.guardianRelation)+')':''):'—'],
                 ['Guardian phone', escapeHtml(s.guardianPhone)])}
          </div>
        </div>

        <div class="card">
          <h2 style="font-size:16px;">Government IDs &amp; bank</h2>
          <div style="margin-top:12px;">
            ${g2(["Student's Aadhar", escapeHtml(s.studentAadhar)], ['SSSM ID (student / family)', (s.studentSSSM||'—')+' / '+(s.familySSSM||'—')],
                 ['PEN card', escapeHtml(s.studentPEN)], ['APAR ID', escapeHtml(s.studentAPAR)],
                 ["Father's Aadhar", escapeHtml(s.fatherAadhar)], ["Mother's Aadhar", escapeHtml(s.motherAadhar)],
                 ['Bank account', escapeHtml(s.bankAccountNumber)], ['Bank / IFSC', (s.bankName?escapeHtml(s.bankName):'—')+(s.ifscCode?' · '+escapeHtml(s.ifscCode):'')])}
          </div>
        </div>

        <div class="card">
          <h2 style="font-size:16px;">Transport</h2>
          <div style="margin-top:12px;">
            ${g2(['Mode', escapeHtml(s.transportMode)], ['Picked up by', s.pickupPersonName?escapeHtml(s.pickupPersonName)+(s.pickupPersonPhone?' · '+escapeHtml(s.pickupPersonPhone):''):'—'],
                 ["Driver", s.driverName?escapeHtml(s.driverName)+(s.driverPhone?' · '+escapeHtml(s.driverPhone):''):'—'], ['Vehicle no.', escapeHtml(s.vehicleNumber)])}
          </div>
        </div>
      </div>

      <div class="stack">
        <div class="card">
          <h2 style="font-size:16px;">Admission Form</h2>
          <p style="font-size:13px;color:var(--ink-soft);margin:4px 0 16px;">Prints a filled copy of the school's admission form for this student's file.</p>
          <button class="btn btn-primary btn-block" onclick="printAdmissionForm('${s.id}')">Print Admission Form</button>
        </div>

        <div class="card">
          <h2 style="font-size:16px;">Transfer Certificate</h2>
          ${s.tc && s.tc.issued ? `
            <p style="font-size:12px;color:var(--ink-soft);margin:4px 0 14px;">Issued ${formatDate(s.tc.issueDate)} · <span class="record-tag">${escapeHtml(s.tc.tcNumber)}</span></p>
            <div style="font-size:13px;display:grid;gap:8px;margin-bottom:16px;">
              ${detailField('Reason for leaving', s.tc.reasonForLeaving||'—')}
              ${detailField('Last class studied', s.tc.lastClassStudied||'—')}
              ${detailField('Promotion status', s.tc.promotionStatus||'—')}
              ${detailField('Conduct', s.tc.conductRemark||'—')}
              ${detailField('Attendance', (s.tc.daysPresent||'—')+' / '+(s.tc.workingDays||'—')+' working days')}
            </div>
            <button class="btn btn-primary btn-block" onclick="printTC('${s.id}')">Print TC</button>
          ` : (canEdit('students') ? `
            <p style="font-size:13px;color:var(--ink-soft);margin:4px 0 16px;">No TC issued yet. Filling this in marks the student as left and produces a printable certificate.</p>
            <button class="btn btn-primary btn-block" onclick="openTCModal('${s.id}')">Generate TC</button>
          ` : `<p style="font-size:13px;color:var(--ink-soft);margin:4px 0;">No TC issued yet.</p>`)}
        </div>
      </div>
    </div>`;
}
function detailField(label, value){
  return `<div><div style="font-size:11px;text-transform:uppercase;letter-spacing:.03em;color:var(--ink-soft);">${label}</div><div style="margin-top:2px;">${value}</div></div>`;
}

function openTCModal(studentId){
  const s = students.find(x=>x.id===studentId);
  openModal(`
    <div class="modal-head"><h2 style="font-size:18px;">Generate Transfer Certificate</h2><button onclick="closeModal()">&times;</button></div>
    <p style="font-size:13px;color:var(--ink-soft);margin:-8px 0 16px;">For ${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)} · ${escapeHtml(s.admissionNumber)}</p>
    <form id="tcForm">
      <div class="form-grid">
        <div class="field"><label>Date of issue (leaving date)</label><input type="date" name="issueDate" value="${todayIso()}" required /></div>
        <div class="field"><label>Last date of attendance</label><input type="date" name="lastAttendanceDate" value="${todayIso()}" required /></div>
        <div class="field"><label>Last class studied</label><input name="lastClassStudied" value="${escapeHtml(s.cls)}" required /></div>
        <div class="field span2"><label>Reason for leaving</label><input name="reasonForLeaving" placeholder="e.g. Family relocation" required /></div>
        <div class="field"><label>Result of last annual exam</label>
          <select name="lastExamResult"><option>Passed</option><option>Promoted</option><option>Failed</option><option>Awaited</option></select>
        </div>
        <div class="field"><label>Promoted to class</label><input name="promotionStatus" placeholder="e.g. 8 (leave blank if not applicable)" /></div>
        <div class="field"><label>General conduct</label>
          <select name="conductRemark">
            <option>Good</option><option>Very good</option><option>Satisfactory</option>
          </select>
        </div>
        <div class="field"><label>Working days</label><input type="number" name="workingDays" min="0" /></div>
        <div class="field"><label>Days present</label><input type="number" name="daysPresent" min="0" /></div>
        <div class="field span2" style="display:flex;align-items:center;gap:8px;margin-top:2px;">
          <input type="checkbox" name="duesCleared" id="tcDuesCleared" checked style="width:auto;" />
          <label for="tcDuesCleared" style="margin:0;font-weight:400;">All fee dues paid before leaving</label>
        </div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">Generate &amp; print</button>
      </div>
    </form>`);
  document.getElementById('tcForm').addEventListener('submit', function(e){
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.target).entries());
    fd.duesCleared = !!document.getElementById('tcDuesCleared').checked;
    const year = fd.issueDate.slice(0,4);
    const seq = students.filter(x=>x.tc && x.tc.issued).length + 1;
    s.tc = { issued:true, tcNumber: year+'/'+seq, ...fd };
    s.status = 'tc_issued';
    saveAll();
    closeModal();
    renderStudentDetail(document.getElementById('topbar'),document.getElementById('content'), s.id);
    printTC(s.id);
  });
}
function printTC(studentId){
  const s = students.find(x=>x.id===studentId);
  const p = pronounSet(s.gender);
  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html><html><head><title>TC — ${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</title>
  <style>
    body{font-family:Georgia,serif;color:#1e2a38;max-width:760px;margin:30px auto;padding:0 20px;font-size:13.5px;line-height:1.6;}
    .frame{border:2px solid #1e2a38;padding:22px 28px;}
    .topline{display:flex;justify-content:space-between;font-size:12px;}
    h1{font-size:21px;text-align:center;margin:2px 0 0;}
    .addr{text-align:center;font-size:12px;margin:2px 0;}
    .recognized{text-align:center;font-size:12px;margin:0 0 2px;}
    .codeline{display:flex;justify-content:space-between;font-size:12px;margin-top:4px;}
    .logo{display:block;margin:8px auto;height:56px;}
    .titlewrap{text-align:center;margin:14px 0 16px;}
    .titlebox{display:inline-block;border:1.5px solid #1e2a38;padding:4px 20px;font-weight:bold;letter-spacing:.03em;}
    p{margin:0 0 12px;text-align:justify;}
    .pen{display:flex;border:1px solid #1e2a38;width:260px;margin:16px 0;}
    .pen div{padding:6px 10px;}
    .pen div:first-child{font-weight:bold;border-right:1px solid #1e2a38;width:100px;}
    .sign{display:flex;justify-content:space-between;margin-top:60px;font-size:13px;align-items:flex-end;}
    @media print{ body{margin:0 auto;} }
  </style></head><body>
    <div class="frame">
      <div class="topline"><span>Dise Code - ${escapeHtml(SCHOOL_DISE_CODE)}</span><span>Reg. No. - ${escapeHtml(SCHOOL_REG_NO)}</span></div>
      <img class="logo" src="${LOGO_DATA_URI}" alt="${escapeHtml(SCHOOL_NAME)}" />
      <h1>${escapeHtml(SCHOOL_NAME.toUpperCase())}</h1>
      <p class="addr">${escapeHtml(SCHOOL_ADDRESS)}</p>
      <p class="recognized">(Recognized by the Government)</p>
      <div class="codeline">
        <span>S.No. - ${escapeHtml(s.tc.tcNumber)}</span>
        <span>(Education code Part 3 Form 4)</span>
        <span>Scholar No. - ${escapeHtml(s.admissionNumber)}</span>
      </div>
      <div class="titlewrap"><span class="titlebox">TRANSFER CERTIFICATE</span></div>

      <p>This is to certify that – <strong>${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</strong> ${p.child} of – Mr. <strong>${escapeHtml(s.fatherName||'—')}</strong> and Mrs. <strong>${escapeHtml(s.motherName||'—')}</strong> having ${p.poss.toLowerCase()} mother tongue is <strong>${escapeHtml(s.motherTongue||'Hindi')}</strong> studied in the <strong>${escapeHtml(SCHOOL_NAME.toUpperCase())}</strong> district <strong>${escapeHtml(SCHOOL_DISTRICT)}</strong> from <strong>${formatDate(s.admissionDate)}</strong> to <strong>${formatDate(s.tc.lastAttendanceDate||s.tc.issueDate)}</strong> and is now leaving the school on date <strong>${formatDate(s.tc.issueDate)}</strong>.</p>

      <p>According to scholar register ${p.poss.toLowerCase()} date of birth is (in figures) <strong>${formatDate(s.dob)}</strong> and (in word) <strong>${dateInWords(s.dob).toUpperCase()}</strong> and the caste is – <strong>${escapeHtml(s.category||'—')}</strong></p>

      <p>${p.subj} has been vaccinated and ${p.subj.toLowerCase()} is well protected from small pox. ${p.poss} last annual exam is as follows.</p>

      <p>Class – <strong>${classOrdinal(s.tc.lastClassStudied||s.cls)}</strong> medium <strong>${escapeHtml(s.medium||'English')}</strong> result <strong>${escapeHtml(s.tc.lastExamResult||'—')}</strong> Year <strong>${escapeHtml(s.session||currentAcademicYear())}</strong></p>

      ${s.tc.promotionStatus ? `<p>${p.subj} is promoted in class <strong>${classOrdinal(s.tc.promotionStatus)}</strong></p>` : ''}

      <p>${s.tc.duesCleared
        ? `On date <strong>${formatDate(s.tc.issueDate)}</strong> before leaving the school <strong>${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</strong> ${p.child} of Mr. <strong>${escapeHtml(s.fatherName||'—')}</strong> paid all the dues.`
        : `Fee dues were outstanding at the time of leaving.`}</p>

      <p>${p.poss} conduct is <strong>${escapeHtml(s.tc.conductRemark||'Good')}</strong> and attendance is <strong>${escapeHtml(s.tc.daysPresent||'—')}</strong> days out of <strong>${escapeHtml(s.tc.workingDays||'—')}</strong> working days.</p>

      <div class="pen"><div>PEN NO</div><div>${escapeHtml(s.studentPEN||'—')}</div></div>

      <div class="sign">
        <span>Date:- ${formatDate(s.tc.issueDate)}</span>
        <span>Principal</span>
      </div>
    </div>
    <script>window.onload = () => window.print();<\/script>
  </body></html>`);
  win.document.close();
}

function printAdmissionForm(studentId){
  const s = students.find(x=>x.id===studentId);
  const win = window.open('', '_blank');
  const row = (num, label, value) => `<tr><td class="num">${num}.</td><td class="lbl">${label}</td><td class="val">${value}</td></tr>`;
  win.document.write(`<!DOCTYPE html><html><head><title>Admission Form — ${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</title>
  <style>
    body{font-family:Georgia,serif;color:#1e2a38;max-width:760px;margin:30px auto;padding:0 24px 40px;}
    .frame{border:2px solid #1e2a38;padding:22px 26px;}
    h1{font-size:22px;text-align:center;margin:0;}
    .addr{text-align:center;font-size:13px;color:#5b6472;margin:4px 0 0;}
    .topline{display:flex;justify-content:space-between;font-size:13px;margin:16px 0 4px;}
    .titlebox{text-align:center;background:#1e2a38;color:#fff;display:inline-block;padding:4px 22px;font-size:14px;letter-spacing:.04em;margin:8px 0;}
    .titlewrap{text-align:center;}
    table.fields{width:100%;border-collapse:collapse;font-size:13px;margin-top:10px;}
    table.fields td{padding:7px 4px;border-bottom:1px dotted #b9b3a2;vertical-align:top;}
    td.num{width:20px;color:#5b6472;}
    td.lbl{width:230px;color:#5b6472;}
    td.val{font-weight:500;}
    .decl{font-size:12px;margin-top:18px;line-height:1.5;}
    .sign{display:flex;justify-content:space-between;margin-top:36px;font-size:13px;}
    .office{border:1px solid #1e2a38;margin-top:26px;padding:14px 16px;}
    .office h3{margin:0 0 10px;font-size:13px;text-transform:uppercase;letter-spacing:.04em;}
    .checks{display:flex;gap:26px;font-size:13px;margin-bottom:12px;}
    .box{display:inline-block;width:14px;height:14px;border:1px solid #1e2a38;text-align:center;line-height:14px;margin-right:5px;font-size:11px;}
    .office table{width:100%;border-collapse:collapse;font-size:13px;}
    .office td{padding:5px 4px;}
    .legalpage{page-break-before:always;}
    .legaltitle{text-align:center;font-size:17px;font-weight:bold;letter-spacing:.02em;margin:6px 0 2px;}
    .legalsub{text-align:center;font-size:12px;font-style:italic;color:#5b6472;margin:0 0 18px;}
    .clause{margin-bottom:14px;}
    .clause .en{font-size:12.5px;line-height:1.55;margin:0 0 4px;}
    .clause .hi{font-size:12.5px;line-height:1.7;margin:0;color:#33404f;}
    .clause b{font-weight:bold;}
    .legalsign{margin-top:26px;font-size:13px;line-height:2.1;}
    @media print{ body{margin:0 auto;} }
  </style></head><body>
    <div class="frame">
      <img src="${LOGO_DATA_URI}" alt="Bombay Kids International School" style="height:60px;display:block;margin:0 auto 6px;" />
      <p class="addr">${escapeHtml(SCHOOL_ADDRESS.toUpperCase())} ${SCHOOL_PHONE ? '· ' + escapeHtml(SCHOOL_PHONE) : ''}</p>
      <div class="topline"><span>Scholar no. ${escapeHtml(s.admissionNumber)}</span><span>${escapeHtml(s.medium||'English Medium')}</span></div>
      <div class="topline" style="margin-top:0;"><span>SSSM ID ${escapeHtml(s.studentSSSM||'—')}</span><span>ADHAR NO. ${escapeHtml(s.studentAadhar||'—')}</span></div>
      <div class="topline" style="margin-top:0;"><span>FID NO. ${escapeHtml(s.studentFID||'—')}</span><span></span></div>
      <div class="titlewrap"><span class="titlebox">Admission Form</span></div>
      <table class="fields">
        ${row(1, 'NAME OF THE STUDENT', escapeHtml(s.firstName)+' '+escapeHtml(s.lastName))}
        ${row(2, "FATHER'S NAME", 'Mr. '+escapeHtml(s.fatherName||'—'))}
        ${row(3, "MOTHER'S NAME", 'Mrs. '+escapeHtml(s.motherName||'—'))}
        ${row(4, 'DATE OF BIRTH (figure / words)', formatDate(s.dob)+' / '+dateInWords(s.dob))}
        ${row(5, 'PLACE OF BIRTH', escapeHtml(s.placeOfBirth||'—')+' (enclose birth certificate)')}
        ${row(6, "FATHER'S EDU. / OCCUPATION", (s.fatherEducation||'—')+' / '+(s.fatherOccupation||'—'))}
        ${row(7, "MOTHER'S EDU. / OCCUPATION", (s.motherEducation||'—')+' / '+(s.motherOccupation||'—'))}
        ${row(8, "PARENT'S / GUARDIAN'S ADDRESS · WHATSAPP", (s.address||'—')+' · '+(s.whatsapp||'—'))}
        ${row(9, 'PERMANENT ADDRESS · MOB', (s.permanentAddress||s.address||'—')+' · '+(s.phone||'—'))}
        ${row(10, 'RELIGION · CASTE · MOTHER TONGUE · NATIONALITY', (s.religion||'—')+' · '+(s.caste||'—')+' · '+(s.motherTongue||'Hindi')+' · '+(s.nationality||'Indian'))}
        ${row(11, 'BELONGING TO ST/SC/OBC/GEN.', escapeHtml(s.category||'—'))}
        ${row(12, 'NAME OF LAST SCHOOL ATTENDED', escapeHtml(s.previousSchool||'—'))}
        ${row(13, 'RESULT OF LAST EXAM · CLASS · SESSION', (s.previousResult||'—')+' · '+(s.previousClassStudied||'—')+' · '+(s.previousSession||'—'))}
      </table>
      ${s.note ? `<p class="decl" style="margin-top:10px;"><b>Note:</b> ${escapeHtml(s.note)}</p>` : ''}
      <p class="decl">I Certify that the above information given by me are true and correct. I'll agree to accept any decision taken by School Authorities.</p>
      <div class="sign"><span>Date: ${formatDate(todayIso())}</span><span>Signature Parents/Guardians: ___________________</span></div>

      <div class="office">
        <h3>For Office Use Only</h3>
        <div class="checks">
          <span><span class="box">&#10003;</span>Admitted</span>
          <span><span class="box"></span>Provisionally Admitted</span>
          <span><span class="box"></span>Not Admitted</span>
        </div>
        <table>
          <tr><td>Name: ${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</td><td>Father's Name: ${escapeHtml(s.fatherName||'—')}</td></tr>
          <tr><td>Class: ${escapeHtml(s.cls)}</td><td>Section: ${escapeHtml(s.section)}</td></tr>
          <tr><td>Sch. No.: ${escapeHtml(s.admissionNumber)}</td><td>Date: ${formatDate(s.admissionDate)}</td></tr>
          <tr><td>Amount paid at admission: ${escapeHtml(s.admissionFeesPaid||'—')}</td><td>Finalized Fee Amount: ${escapeHtml(s.yearlyFeesPaid||'—')}</td></tr>
        </table>
        <div class="sign" style="margin-top:26px;"><span></span><span>Principal Signature: ___________________</span></div>
      </div>
    </div>

    <div class="frame legalpage">
      <img src="${LOGO_DATA_URI}" alt="Bombay Kids International School" style="height:50px;display:block;margin:0 auto 6px;" />
      <p class="addr">${escapeHtml(SCHOOL_ADDRESS.toUpperCase())}</p>
      <p class="legaltitle">SPECIAL LEGAL UNDERTAKING &amp; INDEMNITY CLAUSE<br/>विशेष कानूनी वचनबद्धता एवं क्षतिपूर्ति खंड</p>
      <p class="legalsub">(Must be signed by both parents/guardians) · (दोनों माता-पिता/अभिभावकों द्वारा हस्ताक्षरित होना आवश्यक है)</p>

      <div class="clause">
        <p class="en"><b>Mandatory Clearance for TC:</b> I/We explicitly acknowledge and agree that the issuance of a Transfer Certificate (TC), character certificate, or final academic transcripts is strictly conditional upon the full and final settlement of all outstanding school fees, dues, and penalties.</p>
        <p class="hi"><b>अनिवार्य टीसी निकासी:</b> मैं/हम स्पष्ट रूप से स्वीकार करते हैं और सहमत हैं कि स्थानांतरण प्रमाण पत्र (टीसी), चरित्र प्रमाण पत्र, अथवा अंतिम शैक्षणिक प्रतिलेख जारी करना, समस्त बकाया स्कूल फीस, देय राशि एवं जुर्माने के पूर्ण व अंतिम भुगतान पर पूर्णतः निर्भर है।</p>
      </div>

      <div class="clause">
        <p class="en"><b>Waiver of Coercive Claims:</b> I/We undertake not to coerce, pressure, or blackmail the school management into issuing a TC or any official documents while fees remain unpaid. I/We agree that any demand for a TC without full fee clearance is legally invalid.</p>
        <p class="hi"><b>जबरदस्ती दावों की छूट:</b> मैं/हम वचन देते हैं कि फीस बकाया रहते हुए टीसी अथवा किसी भी आधिकारिक दस्तावेज़ को जारी करने हेतु विद्यालय प्रबंधन को बाध्य, दबावग्रस्त अथवा ब्लैकमेल नहीं करेंगे। मैं/हम सहमत हैं कि पूर्ण फीस भुगतान के बिना टीसी की कोई भी मांग कानूनी रूप से अमान्य है।</p>
      </div>

      <div class="clause">
        <p class="en"><b>Protection Against Defamation &amp; False Litigation:</b> I/We solemnly affirm that I/we will not file false, malicious, or misleading complaints before any education department, consumer forum, court, or police authority regarding fee disputes. If I/we initiate any legal proceedings based on false statements or misrepresentation of facts, the school reserves the absolute right to use this signed document as primary evidence of bad faith.</p>
        <p class="hi"><b>मानहानि एवं झूठे मुकदमों से सुरक्षा:</b> मैं/हम दृढ़तापूर्वक पुष्टि करते हैं कि फीस विवाद के संबंध में किसी भी शिक्षा विभाग, उपभोक्ता फोरम, न्यायालय, अथवा पुलिस प्राधिकरण के समक्ष झूठी, दुर्भावनापूर्ण, अथवा भ्रामक शिकायत दर्ज नहीं करेंगे। यदि मैं/हम झूठे बयानों अथवा तथ्यों की गलत प्रस्तुति के आधार पर कोई कानूनी कार्यवाही आरंभ करते हैं, तो विद्यालय इस हस्ताक्षरित दस्तावेज़ को दुर्भावना के प्राथमिक प्रमाण के रूप में उपयोग करने का पूर्ण अधिकार सुरक्षित रखता है।</p>
      </div>

      <div class="clause">
        <p class="en"><b>Indemnity and Recovery of Costs:</b> In the event that the school is forced to defend itself against false complaints or litigation initiated by me/us, or if the school must initiate legal recovery proceedings for unpaid fees, I/we agree to fully indemnify the school. This means I/we will be legally liable to pay all of the school's legal expenses, lawyer fees, and court costs, in addition to the unpaid school dues with applicable interest.</p>
        <p class="hi"><b>क्षतिपूर्ति एवं लागत वसूली:</b> यदि विद्यालय को मेरे/हमारे द्वारा आरंभ की गई झूठी शिकायतों अथवा मुकदमेबाजी के विरुद्ध स्वयं का बचाव करना पड़ता है, अथवा यदि विद्यालय को बकाया फीस हेतु कानूनी वसूली कार्यवाही आरंभ करनी पड़ती है, तो मैं/हम विद्यालय की पूर्ण क्षतिपूर्ति करने हेतु सहमत हैं। इसका अर्थ है कि मैं/हम बकाया विद्यालय देय राशि एवं लागू ब्याज के अतिरिक्त, विद्यालय के समस्त कानूनी व्यय, अधिवक्ता शुल्क, एवं न्यायालय व्यय का भुगतान करने हेतु कानूनी रूप से उत्तरदायी होंगे।</p>
      </div>

      <div class="clause">
        <p class="en"><b>Irrevocable Consent:</b> By signing below, I/we declare that this undertaking is made voluntarily, without any pressure, and shall stand as a binding legal contract in a court of law.</p>
        <p class="hi"><b>अपरिवर्तनीय सहमति:</b> नीचे हस्ताक्षर करके, मैं/हम घोषित करते हैं कि यह वचनबद्धता स्वेच्छा से, बिना किसी दबाव के की गई है, और न्यायालय में एक बाध्यकारी कानूनी अनुबंध के रूप में मान्य होगी।</p>
      </div>

      <div class="legalsign">
        Father's Name / पिता का नाम: ${escapeHtml(s.fatherName||'')} &nbsp;&nbsp;&nbsp; Signature / हस्ताक्षर: ___________________ &nbsp;&nbsp;&nbsp; Date / दिनांक: __________<br/>
        Mother's Name / माता का नाम: ${escapeHtml(s.motherName||'')} &nbsp;&nbsp;&nbsp; Signature / हस्ताक्षर: ___________________ &nbsp;&nbsp;&nbsp; Date / दिनांक: __________
      </div>
    </div>
    <script>window.onload = () => window.print();<\/script>
  </body></html>`);
  win.document.close();
}

/* ---------------- enquiries ---------------- */
function renderEnquiries(topbar, content){
  topbar.innerHTML = `
    <div><h1>Enquiries</h1><p>Every prospective admission from first contact onward.</p></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn btn-secondary" onclick="downloadCategoryCsv('enquiries')">Download CSV</button>
      ${can('userManagement') ? `<button class="btn btn-secondary" onclick="goTo('dataCenter')">Data Center</button>` : ''}
      ${canEdit('enquiries') ? `<button class="btn btn-primary" onclick="openEnquiryModal()">+ Add enquiry</button>` : ''}
    </div>`;

  const sorted = [...enquiries].sort((a,b)=> new Date(b.createdAt)-new Date(a.createdAt));
  const editable = canEdit('enquiries');

  content.innerHTML = sorted.length===0 ? `<div class="table-wrap"><div class="empty">No enquiries yet. Log your first walk-in or call above.</div></div>` : `
    <div class="table-wrap"><table>
      <thead><tr><th>Child</th><th>Applying for</th><th>Parent</th><th>Next follow-up</th><th>Status</th><th></th></tr></thead>
      <tbody>
        ${sorted.map(e => `
          <tr>
            <td style="font-weight:500;">${escapeHtml(e.childName)}</td>
            <td style="color:var(--ink-soft);">${escapeHtml(e.classApplyingFor)}</td>
            <td style="color:var(--ink-soft);">${escapeHtml(e.parentName)}<br/><span style="font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:12px;">${escapeHtml(e.parentPhone)}</span></td>
            <td style="color:var(--ink-soft);">${formatDate(e.nextFollowUpDate)}</td>
            <td>
              ${editable ? `
                <select onchange="updateEnquiryStatus('${e.id}', this.value)" style="border:1px solid var(--line);border-radius:6px;padding:4px 6px;font-size:12px;">
                  ${Object.keys(STAGE_LABELS).map(k=>`<option value="${k}" ${e.status===k?'selected':''}>${STAGE_LABELS[k]}</option>`).join('')}
                </select>
              ` : `<span class="record-tag">${STAGE_LABELS[e.status]||e.status}</span>`}
            </td>
            <td style="text-align:right;white-space:nowrap;">
              ${editable ? `
                <button class="btn btn-secondary btn-sm" onclick="openFollowUpModal('${e.id}')">Follow-up</button>
                ${e.status!=='admitted' ? `<button class="btn btn-secondary btn-sm" onclick="openStudentModal(null); prefillFromEnquiry('${e.id}')">Convert</button>` : ''}
                <button class="btn btn-danger btn-sm" onclick="deleteEnquiry('${e.id}')">Delete</button>
              ` : ''}
            </td>
          </tr>`).join('')}
      </tbody>
    </table></div>`;
}
function updateEnquiryStatus(id, status){
  const e = enquiries.find(x=>x.id===id);
  e.status = status;
  saveAll();
  renderEnquiries(document.getElementById('topbar'),document.getElementById('content'));
}
function deleteEnquiry(id){
  if(!confirm('Delete this enquiry?')) return;
  enquiries = enquiries.filter(e=>e.id!==id);
  saveAll();
  renderEnquiries(document.getElementById('topbar'),document.getElementById('content'));
}
function openEnquiryModal(){
  openModal(`
    <div class="modal-head"><h2 style="font-size:18px;">Add enquiry</h2><button onclick="closeModal()">&times;</button></div>
    <form id="enquiryForm">
      <div class="form-grid">
        <div class="field span2"><label>Child's name</label><input name="childName" required /></div>
        <div class="field"><label>Date of birth</label><input type="date" name="dob" /></div>
        <div class="field"><label>Class applying for</label><input name="classApplyingFor" required /></div>
        <div class="field"><label>Parent's name</label><input name="parentName" required /></div>
        <div class="field"><label>Parent's phone</label><input name="parentPhone" required /></div>
        <div class="field"><label>Source</label>
          <select name="source"><option>Walk-in</option><option>Phone</option><option>Referral</option><option>Website</option><option>Social media</option></select>
        </div>
        <div class="field"><label>Next follow-up date</label><input type="date" name="nextFollowUpDate" /></div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">Add enquiry</button>
      </div>
    </form>`);
  document.getElementById('enquiryForm').addEventListener('submit', function(e){
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.target).entries());
    fd.id = uid('enq');
    fd.enquiryNumber = 'ENQ-' + new Date().getFullYear() + '-' + String(enquiries.length+1).padStart(3,'0');
    fd.status = 'new';
    fd.followUps = [];
    fd.convertedStudentId = null;
    fd.createdAt = new Date().toISOString();
    enquiries.push(fd);
    saveAll();
    closeModal();
    renderEnquiries(document.getElementById('topbar'),document.getElementById('content'));
  });
}
function openFollowUpModal(enquiryId){
  const e = enquiries.find(x=>x.id===enquiryId);
  openModal(`
    <div class="modal-head"><h2 style="font-size:18px;">Log a follow-up</h2><button onclick="closeModal()">&times;</button></div>
    <p style="font-size:13px;color:var(--ink-soft);margin:-8px 0 16px;">${escapeHtml(e.childName)}</p>
    ${e.followUps.length ? `<div style="margin-bottom:16px;max-height:160px;overflow:auto;">${e.followUps.slice().reverse().map(f=>`
      <div style="font-size:13px;padding:8px 0;border-top:1px solid var(--line);"><strong>${formatDate(f.date)}</strong> — ${escapeHtml(f.note)}</div>`).join('')}</div>` : ''}
    <form id="followUpForm">
      <div class="field"><label>Date</label><input type="date" name="date" value="${todayIso()}" required /></div>
      <div class="field"><label>Note</label><textarea name="note" rows="3" required></textarea></div>
      <div class="field"><label>Next follow-up date</label><input type="date" name="nextFollowUpDate" value="${e.nextFollowUpDate||''}" /></div>
      <div class="modal-actions">
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </form>`);
  document.getElementById('followUpForm').addEventListener('submit', function(ev){
    ev.preventDefault();
    const fd = Object.fromEntries(new FormData(ev.target).entries());
    e.followUps.push({date:fd.date, note:fd.note});
    e.nextFollowUpDate = fd.nextFollowUpDate || '';
    saveAll();
    closeModal();
    renderEnquiries(document.getElementById('topbar'),document.getElementById('content'));
  });
}
var pendingConversion = null;
function prefillFromEnquiry(enquiryId){
  pendingConversion = enquiryId;
  const e = enquiries.find(x=>x.id===enquiryId);
  const parts = e.childName.trim().split(' ');
  const form = document.getElementById('studentForm');
  const set = (name, val) => { const el = form.elements.namedItem(name); if(el) el.value = val; };
  set('firstName', parts[0] || '');
  set('lastName', parts.slice(1).join(' ') || '');
  set('dob', e.dob || '');
  set('cls', e.classApplyingFor || '');
  set('fatherName', e.parentName || '');
  set('phone', e.parentPhone || '');
  set('whatsapp', e.parentPhone || '');
}

/* ---------------- staff ---------------- */
var staffTabMode = 'directory';
function switchStaffTab(mode){
  staffTabMode = mode;
  renderStaff(document.getElementById('topbar'), document.getElementById('content'));
}
function renderStaff(topbar, content){
  topbar.innerHTML = `
    <div><h1>Staff</h1><p>${staffList.length} staff on record</p></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn ${staffTabMode==='directory'?'btn-primary':'btn-secondary'} btn-sm" onclick="switchStaffTab('directory')">Directory</button>
      ${can('staffAttendance') ? `<button class="btn ${staffTabMode==='attendance'?'btn-primary':'btn-secondary'} btn-sm" onclick="switchStaffTab('attendance')">Today's Attendance</button>` : ''}
      ${staffTabMode==='directory' ? `
        <button class="btn btn-secondary" onclick="downloadCategoryCsv('staff')">Download CSV</button>
        <button class="btn btn-secondary" onclick="printStaff()">Print List</button>
        ${can('userManagement') ? `<button class="btn btn-secondary" onclick="goTo('dataCenter')">Data Center</button>` : ''}
        ${canEdit('staffDirectory') ? `<button class="btn btn-primary" onclick="openStaffModal()">+ Add staff</button>` : ''}
      ` : ''}
    </div>`;

  if(staffTabMode === 'attendance' && can('staffAttendance')){
    if(!staffAttendanceView.date) staffAttendanceView.date = todayIso();
    content.innerHTML = `
      <div class="toolbar">
        <input type="date" id="staffAttDateInput" value="${staffAttendanceView.date}" onchange="loadStaffAttendanceRegister()" />
      </div>
      <div id="staffAttendanceWrap"></div>`;
    renderStaffAttendanceRegister();
    return;
  }

  content.innerHTML = `
    <div class="toolbar">
      <button type="button" class="btn btn-secondary" onclick="document.getElementById('staffFilterPanel').style.display=document.getElementById('staffFilterPanel').style.display==='none'?'flex':'none';">Filter</button>
      <div id="staffFilterPanel" style="display:none;gap:10px;flex-wrap:wrap;width:100%;background:var(--surface-alt);border-radius:8px;padding:10px 12px;">
        <select onchange="staffFilters.role=this.value; renderStaffTable();">
          <option value="">Any role</option>
          ${['Teacher','Admin','Principal','Support'].map(r=>`<option value="${r}" ${staffFilters.role===r?'selected':''}>${r}</option>`).join('')}
        </select>
        <select onchange="staffFilters.status=this.value; renderStaffTable();">
          <option value="">Any status</option>
          <option value="active" ${staffFilters.status==='active'?'selected':''}>Active</option>
          <option value="inactive" ${staffFilters.status==='inactive'?'selected':''}>Inactive</option>
        </select>
      </div>
    </div>
    <div id="staffTableWrap"></div>`;
  renderStaffTable();
}
function renderStaffTable(){
  const rows = staffList.filter(m => {
    if(staffFilters.role && m.role !== staffFilters.role) return false;
    if(staffFilters.status && m.employmentStatus !== staffFilters.status) return false;
    return true;
  });
  const allSelected = rows.length>0 && rows.every(m=>getSelectedSet('staff').has(m.id));

  document.getElementById('staffTableWrap').innerHTML = rows.length===0 ? `<div class="table-wrap"><div class="empty">No staff match these filters.</div></div>` : renderRecordBulkActionBar('staff', canEdit('staffDirectory')?'bulkDeleteSelectedStaff()':null) + `
    <label style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--ink-soft);margin-bottom:10px;">
      <input type="checkbox" ${allSelected?'checked':''} onchange="toggleAllRecordSelection('staff','staffTableWrap',this.checked)" style="width:auto;" /> Select all shown
    </label>
    <div class="staff-grid">
      ${rows.map(m => `
        <div class="card">
          <div style="display:flex;align-items:flex-start;gap:8px;">
            <input type="checkbox" data-id="${m.id}" ${getSelectedSet('staff').has(m.id)?'checked':''} onchange="toggleRecordSelection('staff','${m.id}',this.checked)" style="width:auto;margin-top:4px;" />
            <div style="display:flex;align-items:center;gap:10px;cursor:pointer;flex:1;min-width:0;" onclick="goToStaff('${m.id}')">
              ${avatarHtml(m.photo, m.firstName, m.lastName, 40)}
              <div style="min-width:0;">
                <p style="margin:0;font-weight:500;">${escapeHtml(m.firstName)} ${escapeHtml(m.lastName)}</p>
                <p style="margin:1px 0 0;font-size:12px;color:var(--ink-soft);">${escapeHtml(m.role)}${m.department?' · '+escapeHtml(m.department):''}</p>
              </div>
            </div>
          </div>
          <div style="margin-top:14px;font-size:12px;color:var(--ink-soft);display:grid;gap:5px;">
            <div style="display:flex;justify-content:space-between;"><span>Employee ID</span><span class="record-tag">${escapeHtml(m.employeeId)}</span></div>
            ${m.phone?`<div style="display:flex;justify-content:space-between;"><span>Phone</span><span style="font-family:ui-monospace,SFMono-Regular,Consolas,monospace;color:var(--ink);">${escapeHtml(m.phone)}</span></div>`:''}
            ${can('salary') ? `<div style="display:flex;justify-content:space-between;align-items:center;"><span>${monthLabel(currentMonthKey())} salary</span>${(() => {
              const rec = salaries.find(x=>x.staffId===m.id && x.month===currentMonthKey());
              return rec ? feeStatusPill(rec) : `<span class="pill pill-neutral">Not recorded</span>`;
            })()}</div>` : ''}
          </div>
          <div style="display:flex;gap:8px;margin-top:14px;">
            <button class="btn btn-secondary btn-sm" style="flex:1;" onclick="goToStaff('${m.id}')">View</button>
            ${canEdit('salary') ? `<button class="btn btn-secondary btn-sm" onclick="openSalaryModal(null,'${m.id}')">Salary</button>` : ''}
            ${canEdit('staffDirectory') ? `<button class="btn btn-danger btn-sm" onclick="deleteStaffMember('${m.id}')">Delete</button>` : ''}
          </div>
        </div>`).join('')}
    </div>`;
  updateRecordBulkBar('staff');
}
function goToStaff(id){
  view = { name: 'staffDetail', studentId: null, staffId: id };
  renderSidebar();
  renderApp();
}
/** Best-effort match against the timetable grid — cells hold free text like
 *  "Maths - Sarita", matched here against the staff member's first name. */
function getStaffTimetable(staffMember){
  const firstName = (staffMember.firstName||'').toLowerCase();
  if(!firstName) return [];
  const rows = [];
  CLASS_LEVELS.forEach(cls => {
    timeTableData.periods.forEach(p => {
      if(p.isBreak) return;
      const val = timeTableData.cells[cls+'|'+p.id];
      if(!val) return;
      const teacher = extractTeacherName(val).toLowerCase();
      if(teacher && (teacher === firstName || teacher.includes(firstName))){
        rows.push({period: p, cls, subject: extractSubject(val)});
      }
    });
  });
  return rows;
}
function renderStaffDetail(topbar, content, staffId){
  const m = staffList.find(x=>x.id===staffId);
  if(!m){ content.innerHTML = `<div class="empty">Staff member not found.</div>`; return; }

  topbar.innerHTML = `
    <div>
      <button class="btn btn-secondary btn-sm" onclick="goTo('staff')" style="margin-bottom:8px;">&larr; All staff</button>
      <h1>${escapeHtml(m.firstName)} ${escapeHtml(m.lastName)}</h1>
      <p>${escapeHtml(m.designation||m.role)}${m.department?' · '+escapeHtml(m.department):''}</p>
    </div>
    <div style="display:flex;gap:8px;">
      ${canEdit('staffDirectory') ? `<button class="btn btn-secondary" onclick="openStaffModal('${m.id}')">Edit</button>` : ''}
      ${canEdit('salary') ? `<button class="btn btn-secondary" onclick="openSalaryModal(null,'${m.id}')">Salary</button>` : ''}
    </div>`;

  const schedule = getStaffTimetable(m);
  const recentAttendance = staffAttendance.filter(a=>a.staffId===staffId).sort((a,b)=>(b.date||'').localeCompare(a.date||'')).slice(0,10);

  content.innerHTML = `
    <div class="detail-layout">
      <div class="stack">
        <div class="card">
          <div style="display:flex;align-items:center;gap:12px;">
            ${avatarHtml(m.photo, m.firstName, m.lastName, 48)}
            <div>
              <p style="font-family:Georgia,'Times New Roman',serif;font-size:18px;margin:0;">${escapeHtml(m.firstName)} ${escapeHtml(m.lastName)}</p>
              <span class="record-tag">${escapeHtml(m.employeeId)}</span>
            </div>
          </div>
          <div style="margin-top:16px;display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:13px;">
            ${detailField('Role', escapeHtml(m.role))}
            ${detailField('Department', escapeHtml(m.department||'—'))}
            ${detailField('Phone', escapeHtml(m.phone||'—'))}
            ${detailField('Email', escapeHtml(m.email||'—'))}
            ${detailField('Date of joining', formatDate(m.dateOfJoining))}
            ${detailField('Status', escapeHtml(m.employmentStatus))}
          </div>
        </div>

        <div class="card">
          <h2 style="font-size:16px;">Time Table</h2>
          <p style="font-size:12px;color:var(--ink-soft);margin:2px 0 10px;">Matched from the school timetable by name</p>
          ${schedule.length===0 ? `<p style="font-size:13px;color:var(--ink-soft);">No periods matched for this name yet — check spelling in the Time Table grid.</p>` : `
          <div class="table-wrap"><table>
            <thead><tr><th>Period</th><th>Class</th><th>Subject</th></tr></thead>
            <tbody>${schedule.map(r=>`<tr><td>${escapeHtml(r.period.label)}</td><td>${classDisplayLabel(r.cls)}</td><td>${escapeHtml(r.subject)}</td></tr>`).join('')}</tbody>
          </table></div>`}
        </div>
      </div>

      <div class="stack">
        ${can('staffAttendance') ? `
        <div class="card">
          <h2 style="font-size:16px;">Recent Attendance</h2>
          ${recentAttendance.length===0 ? `<p style="font-size:13px;color:var(--ink-soft);margin-top:8px;">No attendance recorded yet.</p>` : `
            <div style="margin-top:10px;font-size:13px;">${recentAttendance.map(a => `
              <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-top:1px solid var(--line);">
                <span>${formatDate(a.date)}</span>
                ${attendancePill(a.status)}
                ${a.entryTime||a.exitTime ? `<span style="color:var(--ink-soft);font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:11px;">${escapeHtml(a.entryTime||'—')}–${escapeHtml(a.exitTime||'—')}</span>` : ''}
              </div>`).join('')}</div>`}
        </div>` : ''}
      </div>
    </div>`;
}
function openStaffModal(existingId){
  const m = existingId ? staffList.find(x=>x.id===existingId) : null;
  const photoPreview = m && m.photo ? `<img src="${m.photo}" alt="" style="width:56px;height:56px;border-radius:8px;object-fit:cover;display:block;margin-bottom:6px;" />` : '';
  openModal(`
    <div class="modal-head"><h2 style="font-size:18px;">${m?'Edit staff':'Add staff'}</h2><button onclick="closeModal()">&times;</button></div>
    <form id="staffForm">
      <div class="form-grid">
        <div class="field"><label>First name</label><input name="firstName" value="${escapeHtml(m?.firstName)}" required /></div>
        <div class="field"><label>Last name</label><input name="lastName" value="${escapeHtml(m?.lastName)}" required /></div>
        <div class="field"><label>Role</label>
          <select name="role">${['Teacher','Admin','Principal','Support'].map(r=>`<option ${m?.role===r?'selected':''}>${r}</option>`).join('')}</select>
        </div>
        <div class="field"><label>Department</label><input name="department" value="${escapeHtml(m?.department)}" /></div>
        <div class="field"><label>Phone</label><input name="phone" value="${escapeHtml(m?.phone)}" /></div>
        <div class="field"><label>Email</label><input type="email" name="email" value="${escapeHtml(m?.email)}" /></div>
        <div class="field"><label>Date of joining</label><input type="date" name="dateOfJoining" value="${m?.dateOfJoining||todayIso()}" /></div>
        <div class="field"><label>Status</label>
          <select name="employmentStatus">
            <option value="active" ${(!m||m.employmentStatus==='active')?'selected':''}>Active</option>
            <option value="on_leave" ${m?.employmentStatus==='on_leave'?'selected':''}>On leave</option>
            <option value="inactive" ${m?.employmentStatus==='inactive'?'selected':''}>Inactive</option>
          </select>
        </div>
        <div class="field span2">
          <label>Passport size photo</label>
          ${photoPreview}
          ${fileInputWithClear('staffPhotoFile','photoFile','image/*')}
        </div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">${m?'Save changes':'Add staff'}</button>
      </div>
    </form>`);
  document.getElementById('staffForm').addEventListener('submit', async function(e){
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.target).entries());
    const photoFile = e.target.elements.namedItem('photoFile').files[0];
    delete fd.photoFile;
    fd.photo = photoFile ? await fileToBase64(photoFile) : (m ? m.photo : null);
    if(m){ Object.assign(m, fd); }
    else {
      fd.id = uid('stf');
      fd.employeeId = 'STF-' + String(staffList.length+1).padStart(3,'0');
      staffList.push(fd);
    }
    saveAll();
    closeModal();
    renderStaff(document.getElementById('topbar'),document.getElementById('content'));
  });
}
function deleteStaffMember(id){
  if(!confirm('Delete this staff record?')) return;
  staffList = staffList.filter(m=>m.id!==id);
  saveAll();
  renderStaff(document.getElementById('topbar'),document.getElementById('content'));
}

/* ---------------- student attendance (per class register, exceptions only) ---------------- */
function attendancePill(status){
  if(status==='A') return `<span class="pill pill-bad">Absent</span>`;
  if(status==='L') return `<span class="pill pill-accent">Leave</span>`;
  return `<span class="pill pill-good">Present</span>`;
}
var pendingAttendanceMarks = {};
function renderStudentAttendance(topbar, content){
  topbar.innerHTML = `<div><h1>Student Attendance</h1><p>Each class keeps its own register — everyone starts marked Present, so you only need to touch the exceptions.</p></div>`;
  if(!attendanceView.date) attendanceView.date = todayIso();

  content.innerHTML = `
    <div class="toolbar">
      <select id="attClassSelect" onchange="loadAttendanceRegister()">
        <option value="">Select class</option>
        ${CLASS_LEVELS.map(c=>`<option value="${c}" ${attendanceView.cls===c?'selected':''}>${classDisplayLabel(c)}</option>`).join('')}
      </select>
      <input type="date" id="attDateInput" value="${attendanceView.date}" onchange="loadAttendanceRegister()" />
    </div>
    <div id="attendanceRegisterWrap"></div>`;
  renderAttendanceRegister();
}
function loadAttendanceRegister(){
  attendanceView.cls = document.getElementById('attClassSelect').value;
  attendanceView.date = document.getElementById('attDateInput').value;
  renderAttendanceRegister();
}
function renderAttendanceRegister(){
  const wrap = document.getElementById('attendanceRegisterWrap');
  if(!attendanceView.cls){
    wrap.innerHTML = `<div class="table-wrap"><div class="empty">Choose a class above to open its register.</div></div>`;
    return;
  }
  const roster = students.filter(s=>s.cls===attendanceView.cls && s.status==='active').sort((a,b)=>a.firstName.localeCompare(b.firstName));
  const existing = {};
  studentAttendance.filter(a=>a.cls===attendanceView.cls && a.date===attendanceView.date).forEach(a => { existing[a.studentId] = a.status; });
  pendingAttendanceMarks = Object.assign({}, existing);
  const editable = canEdit('studentAttendance');

  if(roster.length===0){
    wrap.innerHTML = `<div class="table-wrap"><div class="empty">No active students in ${classDisplayLabel(attendanceView.cls)} yet.</div></div>`;
    return;
  }

  wrap.innerHTML = `
    <div id="attSummary" style="margin-bottom:12px;font-size:13px;"></div>
    <div class="table-wrap"><table>
      <thead><tr><th>Student</th><th>Scholar No.</th><th>Status</th></tr></thead>
      <tbody>
        ${roster.map(s => `
          <tr>
            <td style="font-weight:500;">${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</td>
            <td><span class="record-tag">${escapeHtml(s.admissionNumber)}</span></td>
            <td>
              ${editable ? `
                <div class="att-toggle" data-student="${s.id}">
                  <button type="button" class="att-btn att-p" onclick="setAttendanceMark('${s.id}','P')">P</button>
                  <button type="button" class="att-btn att-a" onclick="setAttendanceMark('${s.id}','A')">A</button>
                  <button type="button" class="att-btn att-l" onclick="setAttendanceMark('${s.id}','L')">L</button>
                </div>
              ` : attendancePill(existing[s.id]||'P')}
            </td>
          </tr>`).join('')}
      </tbody>
    </table></div>
    ${editable ? `<div style="margin-top:14px;"><button class="btn btn-primary" onclick="saveAttendanceRegister()">Save register</button></div>` : ''}`;

  roster.forEach(s => updateAttendanceButtonStyle(s.id));
  updateAttendanceSummary(roster.length);
}
function setAttendanceMark(studentId, status){
  pendingAttendanceMarks[studentId] = status;
  updateAttendanceButtonStyle(studentId);
  const total = students.filter(s=>s.cls===attendanceView.cls && s.status==='active').length;
  updateAttendanceSummary(total);
}
function updateAttendanceButtonStyle(studentId){
  const row = document.querySelector('.att-toggle[data-student="'+studentId+'"]');
  if(!row) return;
  const status = pendingAttendanceMarks[studentId] || 'P';
  row.querySelectorAll('.att-btn').forEach(btn => btn.classList.remove('active'));
  const map = {P:'att-p', A:'att-a', L:'att-l'};
  const activeBtn = row.querySelector('.'+map[status]);
  if(activeBtn) activeBtn.classList.add('active');
}
function updateAttendanceSummary(total){
  const el = document.getElementById('attSummary');
  if(!el) return;
  let absent=0, leave=0;
  Object.values(pendingAttendanceMarks).forEach(v => { if(v==='A') absent++; if(v==='L') leave++; });
  const present = total - absent - leave;
  el.innerHTML = `<span style="color:var(--good);font-weight:600;">${present} Present</span> · <span style="color:var(--bad);font-weight:600;">${absent} Absent</span> · <span style="color:var(--accent);font-weight:600;">${leave} Leave</span> · ${total} total`;
}
function saveAttendanceRegister(){
  const cls = attendanceView.cls, date = attendanceView.date;
  studentAttendance = studentAttendance.filter(a => !(a.cls===cls && a.date===date));
  Object.keys(pendingAttendanceMarks).forEach(studentId => {
    const status = pendingAttendanceMarks[studentId];
    if(status && status !== 'P'){
      const s = students.find(x=>x.id===studentId);
      studentAttendance.push({id:uid('satt'), date, studentId, cls, section: s?s.section:'', status});
    }
  });
  saveAll();
  alert('Attendance saved for ' + classDisplayLabel(cls) + ' on ' + formatDate(date) + '.');
}

/* ---------------- exams & report cards ---------------- */
var GRADE_SCALE = [
  {min:91, max:100, grade:'A1'}, {min:81, max:90, grade:'A2'}, {min:71, max:80, grade:'B1'},
  {min:61, max:70, grade:'B2'}, {min:51, max:60, grade:'C1'}, {min:41, max:50, grade:'C2'},
  {min:33, max:40, grade:'D'}, {min:0, max:32, grade:'E'},
];
function computeGrade(percentage){
  if(percentage===null || percentage===undefined || isNaN(percentage)) return '—';
  const p = Math.round(percentage);
  const found = GRADE_SCALE.find(g => p>=g.min && p<=g.max);
  return found ? found.grade : '—';
}
function getExamSubjects(examId){
  const exam = exams.find(e=>e.id===examId);
  return exam ? exam.subjects : [];
}
function getStudentExamMarks(examId, studentId){
  return examMarks.filter(m=>m.examId===examId && m.studentId===studentId);
}
function computeStudentExamTotals(examId, studentId){
  const subjects = getExamSubjects(examId);
  const marks = getStudentExamMarks(examId, studentId);
  let obtained = 0, maxTotal = 0, subjectsWithMarks = 0;
  subjects.forEach(sub => {
    const m = marks.find(x=>x.subjectName===sub.name);
    maxTotal += Number(sub.maxMarks)||0;
    if(m && m.marksObtained!=='' && m.marksObtained!=null){
      obtained += Number(m.marksObtained)||0;
      subjectsWithMarks++;
    }
  });
  const percentage = maxTotal>0 ? (obtained/maxTotal*100) : 0;
  return { obtained, maxTotal, percentage, subjectsWithMarks, totalSubjects: subjects.length, isComplete: subjects.length>0 && subjectsWithMarks===subjects.length };
}
function goToExam(examId){
  view = { name:'examDetail', studentId:null, examId };
  renderSidebar();
  renderApp();
}
function goToExamMarksEntry(examId){
  view = { name:'examMarksEntry', studentId:null, examId };
  renderSidebar();
  renderApp();
}
function renderExams(topbar, content){
  topbar.innerHTML = `
    <div><h1>Exams &amp; Results</h1><p>${exams.length} exam${exams.length===1?'':'s'} recorded</p></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn btn-secondary" onclick="downloadCategoryCsv('exams')">Download CSV</button>
      ${can('userManagement') ? `<button class="btn btn-secondary" onclick="goTo('dataCenter')">Data Center</button>` : ''}
      ${canEdit('exams') ? `<button class="btn btn-primary" onclick="openExamModal()">+ Create exam</button>` : ''}
    </div>`;

  const sorted = [...exams].sort((a,b)=>(b.examDate||'').localeCompare(a.examDate||''));
  content.innerHTML = sorted.length===0 ? `<div class="table-wrap"><div class="empty">No exams created yet.</div></div>` : `
    <div style="display:grid;gap:12px;">
      ${sorted.map(e => {
        const roster = students.filter(s=>s.cls===e.cls && s.status==='active');
        const enteredCount = roster.filter(s => computeStudentExamTotals(e.id, s.id).isComplete).length;
        return `
        <div class="card" style="cursor:pointer;" onclick="goToExam('${e.id}')">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;">
            <div>
              <h2 style="font-size:16px;margin:0;">${escapeHtml(e.name)}</h2>
              <p style="font-size:13px;color:var(--ink-soft);margin:4px 0 0;">${classDisplayLabel(e.cls)} · ${escapeHtml(e.session)} · ${e.subjects.length} subject${e.subjects.length===1?'':'s'}</p>
            </div>
            <div style="text-align:right;">
              <p style="font-size:13px;margin:0;color:var(--ink-soft);">${e.examDate?formatDate(e.examDate):'No date set'}</p>
              <p style="font-size:12px;color:var(--ink-soft);margin:2px 0 0;">${enteredCount}/${roster.length} marks entered</p>
            </div>
          </div>
        </div>`;
      }).join('')}
    </div>`;
}
var examModalSubjects = [];
function openExamModal(existingId){
  const e = existingId ? exams.find(x=>x.id===existingId) : null;
  examModalSubjects = e ? JSON.parse(JSON.stringify(e.subjects)) : [{name:'', maxMarks:100, passMarks:33}];
  openModal(`
    <div class="modal-head"><h2 style="font-size:18px;">${e?'Edit exam':'Create exam'}</h2><button onclick="closeModal()">&times;</button></div>
    <form id="examForm">
      <div class="form-grid">
        <div class="field span2"><label>Exam name</label><input name="name" value="${escapeHtml(e?e.name:'')}" placeholder="e.g. Half-Yearly Examination" required /></div>
        <div class="field"><label>Class</label>
          <select name="cls" required>
            <option value="">Select class</option>
            ${CLASS_LEVELS.map(c=>`<option value="${c}" ${e&&e.cls===c?'selected':''}>${classDisplayLabel(c)}</option>`).join('')}
          </select>
        </div>
        <div class="field"><label>Session</label><input name="session" value="${escapeHtml(e?e.session:currentAcademicYear())}" required /></div>
        <div class="field"><label>Exam date</label><input type="date" name="examDate" value="${e?e.examDate||'':''}" /></div>
        <div class="field"><label>Result date</label><input type="date" name="resultDate" value="${e?e.resultDate||'':''}" /></div>
      </div>

      <div class="section-title">Subjects</div>
      <div id="examSubjectsWrap"></div>
      <button type="button" class="btn btn-secondary btn-sm" onclick="addExamSubjectRow()" style="margin-top:8px;">+ Add subject</button>

      <div class="modal-actions">
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">${e?'Save changes':'Create exam'}</button>
      </div>
    </form>`);
  renderExamSubjectsRows();

  document.getElementById('examForm').addEventListener('submit', function(ev){
    ev.preventDefault();
    const fd = Object.fromEntries(new FormData(ev.target).entries());
    const validSubjects = examModalSubjects.filter(s=>s.name && String(s.name).trim());
    if(validSubjects.length === 0){ alert('Add at least one subject.'); return; }
    fd.subjects = validSubjects.map(s => ({name: String(s.name).trim(), maxMarks: Number(s.maxMarks)||100, passMarks: Number(s.passMarks)||33}));
    if(e){ Object.assign(e, fd); saveAll(); closeModal(); goToExam(e.id); }
    else {
      fd.id = uid('exam'); fd.status = 'draft'; exams.push(fd); saveAll(); closeModal();
      goToExam(fd.id);
    }
  });
}
function renderExamSubjectsRows(){
  const wrap = document.getElementById('examSubjectsWrap');
  if(!wrap) return;
  wrap.innerHTML = examModalSubjects.map((s,i) => `
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:6px;">
      <input value="${escapeHtml(s.name)}" placeholder="Subject name" oninput="examModalSubjects[${i}].name=this.value" style="flex:2;" />
      <input type="number" min="1" value="${s.maxMarks}" placeholder="Max marks" oninput="examModalSubjects[${i}].maxMarks=this.value" style="flex:1;" />
      <input type="number" min="0" value="${s.passMarks}" placeholder="Pass marks" oninput="examModalSubjects[${i}].passMarks=this.value" style="flex:1;" />
      <button type="button" class="btn btn-danger btn-sm" onclick="removeExamSubjectRow(${i})">&times;</button>
    </div>`).join('');
}
function addExamSubjectRow(){
  examModalSubjects.push({name:'', maxMarks:100, passMarks:33});
  renderExamSubjectsRows();
}
function removeExamSubjectRow(i){
  examModalSubjects.splice(i,1);
  renderExamSubjectsRows();
}
function deleteExam(id){
  if(!confirm('Delete this exam? All marks entered for it will also be deleted. This cannot be undone.')) return;
  exams = exams.filter(e=>e.id!==id);
  examMarks = examMarks.filter(m=>m.examId!==id);
  saveAll();
  goTo('exams');
}
function renderExamDetail(topbar, content, examId){
  const exam = exams.find(e=>e.id===examId);
  if(!exam){ goTo('exams'); return; }
  const roster = students.filter(s=>s.cls===exam.cls && s.status==='active').sort((a,b)=>a.firstName.localeCompare(b.firstName));

  topbar.innerHTML = `
    <div><h1>${escapeHtml(exam.name)}</h1><p>${classDisplayLabel(exam.cls)} · ${escapeHtml(exam.session)} · ${exam.examDate?formatDate(exam.examDate):'No date set'}</p></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn btn-secondary" onclick="goTo('exams')">&larr; All exams</button>
      <button class="btn btn-secondary" onclick="printClassResultSheet('${exam.id}')">Print Class Result Sheet</button>
      ${canEdit('exams') ? `<button class="btn btn-secondary" onclick="openExamModal('${exam.id}')">Edit exam</button>` : ''}
      ${canEdit('exams') ? `<button class="btn btn-danger" onclick="deleteExam('${exam.id}')">Delete</button>` : ''}
      ${canEdit('exams') ? `<button class="btn btn-primary" onclick="goToExamMarksEntry('${exam.id}')">Enter Marks</button>` : ''}
    </div>`;

  const rows = roster.map(s => ({ s, totals: computeStudentExamTotals(exam.id, s.id) }));
  const withMarks = rows.filter(r=>r.totals.isComplete);
  const classAverage = withMarks.length>0 ? (withMarks.reduce((sum,r)=>sum+r.totals.percentage,0)/withMarks.length) : 0;
  const topper = withMarks.length>0 ? withMarks.reduce((best,r)=>r.totals.percentage>best.totals.percentage?r:best) : null;

  content.innerHTML = `
    <div class="stat-grid" style="margin-bottom:16px;">
      <div class="stat-card"><div class="label">Students</div><div class="value" style="font-size:24px;">${roster.length}</div></div>
      <div class="stat-card good"><div class="label">Marks entered</div><div class="value" style="font-size:24px;">${withMarks.length}/${roster.length}</div></div>
      <div class="stat-card accent"><div class="label">Class average</div><div class="value" style="font-size:24px;">${withMarks.length?classAverage.toFixed(1)+'%':'—'}</div></div>
      <div class="stat-card"><div class="label">Topper</div><div class="value" style="font-size:16px;">${topper?escapeHtml(topper.s.firstName)+' '+escapeHtml(topper.s.lastName):'—'}</div></div>
    </div>
    ${roster.length===0 ? `<div class="table-wrap"><div class="empty">No active students in ${classDisplayLabel(exam.cls)}.</div></div>` : `
    <div class="table-wrap"><table>
      <thead><tr><th>Student</th>${exam.subjects.map(sub=>`<th>${escapeHtml(sub.name)}</th>`).join('')}<th>Total</th><th>%</th><th>Grade</th><th></th></tr></thead>
      <tbody>
        ${rows.map(({s,totals}) => {
          const marks = getStudentExamMarks(exam.id, s.id);
          return `
          <tr>
            <td style="font-weight:500;cursor:pointer;" onclick="goToStudent('${s.id}')">${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</td>
            ${exam.subjects.map(sub => {
              const m = marks.find(x=>x.subjectName===sub.name);
              return `<td style="font-family:ui-monospace,SFMono-Regular,Consolas,monospace;">${m && m.marksObtained!=='' && m.marksObtained!=null ? m.marksObtained : '—'}</td>`;
            }).join('')}
            <td style="font-family:ui-monospace,SFMono-Regular,Consolas,monospace;">${totals.isComplete ? totals.obtained+'/'+totals.maxTotal : '—'}</td>
            <td>${totals.isComplete ? totals.percentage.toFixed(1)+'%' : '—'}</td>
            <td>${totals.isComplete ? computeGrade(totals.percentage) : '—'}</td>
            <td style="text-align:right;">${totals.isComplete ? `<button class="btn btn-secondary btn-sm" onclick="printReportCard('${s.id}','${exam.id}')">Report Card</button>` : ''}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table></div>`}`;
}
var pendingExamMarks = {};
function renderExamMarksEntry(topbar, content, examId){
  const exam = exams.find(e=>e.id===examId);
  if(!exam){ goTo('exams'); return; }
  const roster = students.filter(s=>s.cls===exam.cls && s.status==='active').sort((a,b)=>a.firstName.localeCompare(b.firstName));

  topbar.innerHTML = `<div><h1>Enter Marks — ${escapeHtml(exam.name)}</h1><p>${classDisplayLabel(exam.cls)} · ${roster.length} students</p></div>
    <button class="btn btn-secondary" onclick="goToExam('${exam.id}')">&larr; Back to exam</button>`;

  pendingExamMarks = {};
  roster.forEach(s => {
    pendingExamMarks[s.id] = {};
    exam.subjects.forEach(sub => {
      const m = examMarks.find(x=>x.examId===examId && x.studentId===s.id && x.subjectName===sub.name);
      pendingExamMarks[s.id][sub.name] = m ? m.marksObtained : '';
    });
  });

  const editable = canEdit('exams');
  content.innerHTML = roster.length===0 ? `<div class="table-wrap"><div class="empty">No active students in ${classDisplayLabel(exam.cls)}.</div></div>` : `
    <div class="table-wrap"><table>
      <thead><tr><th>Student</th>${exam.subjects.map(sub=>`<th>${escapeHtml(sub.name)}<br><span style="font-weight:400;color:var(--ink-soft);">/${sub.maxMarks}</span></th>`).join('')}</tr></thead>
      <tbody>
        ${roster.map(s => `
          <tr>
            <td style="font-weight:500;">${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</td>
            ${exam.subjects.map(sub => `
              <td>${editable
                ? `<input type="number" min="0" max="${sub.maxMarks}" value="${escapeHtml(pendingExamMarks[s.id][sub.name])}" data-student="${s.id}" data-subject="${escapeHtml(sub.name)}" oninput="updatePendingMark(this)" style="width:70px;" />`
                : (pendingExamMarks[s.id][sub.name]!=='' ? escapeHtml(pendingExamMarks[s.id][sub.name]) : '—')}</td>`).join('')}
          </tr>`).join('')}
      </tbody>
    </table></div>
    ${editable ? `<div style="margin-top:14px;"><button class="btn btn-primary" onclick="saveExamMarks('${exam.id}')">Save marks</button></div>` : ''}`;
}
function updatePendingMark(el){
  const studentId = el.getAttribute('data-student');
  const subject = el.getAttribute('data-subject');
  pendingExamMarks[studentId][subject] = el.value;
}
function saveExamMarks(examId){
  const exam = exams.find(e=>e.id===examId);
  Object.keys(pendingExamMarks).forEach(studentId => {
    exam.subjects.forEach(sub => {
      const value = pendingExamMarks[studentId][sub.name];
      const rec = examMarks.find(m=>m.examId===examId && m.studentId===studentId && m.subjectName===sub.name);
      if(value===''||value===null||value===undefined){
        if(rec) examMarks = examMarks.filter(m=>m!==rec);
        return;
      }
      if(rec){ rec.marksObtained = value; }
      else { examMarks.push({id:uid('mark'), examId, studentId, subjectName:sub.name, marksObtained:value, remarks:''}); }
    });
  });
  saveAll();
  alert('Marks saved.');
  goToExam(examId);
}
function printReportCard(studentId, examId){
  const s = students.find(x=>x.id===studentId);
  const exam = exams.find(e=>e.id===examId);
  const marks = getStudentExamMarks(examId, studentId);
  const totals = computeStudentExamTotals(examId, studentId);
  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html><html><head><title>Report Card — ${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</title>
  <style>
    body{font-family:Georgia,serif;color:#1e2a38;max-width:700px;margin:30px auto;padding:0 20px;font-size:13.5px;line-height:1.5;}
    .frame{border:2px solid #1e2a38;padding:22px 28px;}
    .logo{display:block;margin:6px auto;height:52px;}
    h1{font-size:19px;text-align:center;margin:2px 0 0;}
    .addr{text-align:center;font-size:12px;margin:2px 0 10px;}
    .titlewrap{text-align:center;margin:12px 0 16px;}
    .titlebox{display:inline-block;border:1.5px solid #1e2a38;padding:4px 20px;font-weight:bold;letter-spacing:.03em;}
    .info{display:grid;grid-template-columns:1fr 1fr;gap:6px 20px;font-size:13px;margin-bottom:16px;}
    .info div{display:flex;justify-content:space-between;border-bottom:1px dotted #b9b3a2;padding-bottom:2px;}
    table{width:100%;border-collapse:collapse;font-size:13px;margin-top:10px;}
    th,td{border:1px solid #1e2a38;padding:6px 8px;text-align:center;}
    th{background:#f2ede0;}
    td:first-child, th:first-child{text-align:left;}
    .summary{display:flex;justify-content:space-between;margin-top:16px;font-size:14px;font-weight:bold;}
    .sign{display:flex;justify-content:space-between;margin-top:50px;font-size:13px;}
    @media print{ body{margin:0 auto;} }
  </style></head><body>
    <div class="frame">
      <img class="logo" src="${LOGO_DATA_URI}" alt="${escapeHtml(SCHOOL_NAME)}" />
      <h1>${escapeHtml(SCHOOL_NAME.toUpperCase())}</h1>
      <p class="addr">${escapeHtml(SCHOOL_ADDRESS)}</p>
      <div class="titlewrap"><span class="titlebox">REPORT CARD</span></div>

      <div class="info">
        <div><span>Student Name</span><strong>${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</strong></div>
        <div><span>Scholar No.</span><strong>${escapeHtml(s.admissionNumber)}</strong></div>
        <div><span>Class</span><strong>${classDisplayLabel(s.cls)}${escapeHtml(s.section)}</strong></div>
        <div><span>Father's Name</span><strong>${escapeHtml(s.fatherName||'—')}</strong></div>
        <div><span>Exam</span><strong>${escapeHtml(exam.name)}</strong></div>
        <div><span>Session</span><strong>${escapeHtml(exam.session)}</strong></div>
      </div>

      <table>
        <thead><tr><th>Subject</th><th>Max Marks</th><th>Marks Obtained</th><th>Grade</th></tr></thead>
        <tbody>
          ${exam.subjects.map(sub => {
            const m = marks.find(x=>x.subjectName===sub.name);
            const obtained = m ? Number(m.marksObtained) : null;
            const subPercentage = obtained!==null ? (obtained/sub.maxMarks*100) : null;
            return `<tr><td>${escapeHtml(sub.name)}</td><td>${sub.maxMarks}</td><td>${obtained!==null?obtained:'—'}</td><td>${subPercentage!==null?computeGrade(subPercentage):'—'}</td></tr>`;
          }).join('')}
        </tbody>
      </table>

      <div class="summary">
        <span>Total: ${totals.obtained} / ${totals.maxTotal}</span>
        <span>Percentage: ${totals.percentage.toFixed(1)}%</span>
        <span>Overall Grade: ${computeGrade(totals.percentage)}</span>
      </div>

      <div class="sign"><span>Class Teacher</span><span>Principal</span></div>
    </div>
    <script>window.onload = () => window.print();<\/script>
  </body></html>`);
  win.document.close();
}
function printClassResultSheet(examId){
  const exam = exams.find(e=>e.id===examId);
  const roster = students.filter(s=>s.cls===exam.cls && s.status==='active').sort((a,b)=>a.firstName.localeCompare(b.firstName));
  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html><html><head><title>Result Sheet — ${escapeHtml(exam.name)}</title>
  <style>
    body{font-family:Georgia,serif;color:#1e2a38;max-width:1000px;margin:30px auto;padding:0 20px;font-size:12px;}
    h1{font-size:18px;text-align:center;margin:4px 0;}
    .addr{text-align:center;font-size:12px;margin:0 0 14px;}
    table{width:100%;border-collapse:collapse;font-size:11.5px;}
    th,td{border:1px solid #1e2a38;padding:5px 6px;text-align:center;}
    th{background:#f2ede0;}
    td:nth-child(2), th:nth-child(2){text-align:left;}
    @media print{ body{margin:0 auto;} }
  </style></head><body>
    <h1>${escapeHtml(SCHOOL_NAME.toUpperCase())}</h1>
    <p class="addr">${escapeHtml(exam.name)} — ${classDisplayLabel(exam.cls)} — ${escapeHtml(exam.session)}</p>
    <table>
      <thead><tr><th>S.No.</th><th>Student</th><th>Scholar No.</th>${exam.subjects.map(sub=>`<th>${escapeHtml(sub.name)}</th>`).join('')}<th>Total</th><th>%</th><th>Grade</th></tr></thead>
      <tbody>
        ${roster.map((s,i) => {
          const marks = getStudentExamMarks(examId, s.id);
          const totals = computeStudentExamTotals(examId, s.id);
          return `<tr>
            <td>${i+1}</td><td>${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</td><td>${escapeHtml(s.admissionNumber)}</td>
            ${exam.subjects.map(sub => { const m = marks.find(x=>x.subjectName===sub.name); return `<td>${m&&m.marksObtained!==''&&m.marksObtained!=null?m.marksObtained:'—'}</td>`; }).join('')}
            <td>${totals.isComplete?totals.obtained+'/'+totals.maxTotal:'—'}</td>
            <td>${totals.isComplete?totals.percentage.toFixed(1)+'%':'—'}</td>
            <td>${totals.isComplete?computeGrade(totals.percentage):'—'}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
    <script>window.onload = () => window.print();<\/script>
  </body></html>`);
  win.document.close();
}

/* ---------------- staff attendance (per day, with entry/exit time) ---------------- */
function loadStaffAttendanceRegister(){
  staffAttendanceView.date = document.getElementById('staffAttDateInput').value;
  renderStaffAttendanceRegister();
}
function renderStaffAttendanceRegister(){
  const wrap = document.getElementById('staffAttendanceWrap');
  const date = staffAttendanceView.date;
  const roster = staffList.filter(m=>m.employmentStatus==='active').sort((a,b)=>a.firstName.localeCompare(b.firstName));
  const editable = canEdit('staffAttendance');
  if(roster.length===0){ wrap.innerHTML = `<div class="table-wrap"><div class="empty">No active staff on record.</div></div>`; return; }

  wrap.innerHTML = `
    <div class="table-wrap"><table>
      <thead><tr><th>Staff</th><th>Status</th><th>Entry time</th><th>Exit time</th></tr></thead>
      <tbody>
        ${roster.map(m => {
          const rec = staffAttendance.find(a=>a.staffId===m.id && a.date===date);
          const status = rec ? rec.status : 'P';
          return `
          <tr>
            <td style="font-weight:500;">${escapeHtml(m.firstName)} ${escapeHtml(m.lastName)}</td>
            <td>
              ${editable ? `
                <select onchange="updateStaffAttField('${m.id}','status',this.value)" style="border:1px solid var(--line);border-radius:6px;padding:4px 8px;font-size:12px;">
                  <option value="P" ${status==='P'?'selected':''}>Present</option>
                  <option value="A" ${status==='A'?'selected':''}>Absent</option>
                  <option value="L" ${status==='L'?'selected':''}>Leave</option>
                </select>
              ` : attendancePill(status)}
            </td>
            <td>${editable ? `<input type="time" value="${rec&&rec.entryTime?rec.entryTime:''}" onchange="updateStaffAttField('${m.id}','entryTime',this.value)" style="border:1px solid var(--line);border-radius:6px;padding:4px 6px;font-size:12px;" />` : escapeHtml(rec&&rec.entryTime?rec.entryTime:'—')}</td>
            <td>${editable ? `<input type="time" value="${rec&&rec.exitTime?rec.exitTime:''}" onchange="updateStaffAttField('${m.id}','exitTime',this.value)" style="border:1px solid var(--line);border-radius:6px;padding:4px 6px;font-size:12px;" />` : escapeHtml(rec&&rec.exitTime?rec.exitTime:'—')}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table></div>`;
}
function updateStaffAttField(staffId, field, value){
  const date = staffAttendanceView.date;
  let rec = staffAttendance.find(a=>a.staffId===staffId && a.date===date);
  if(!rec){
    rec = {id:uid('stat'), date, staffId, status:'P', entryTime:'', exitTime:''};
    staffAttendance.push(rec);
  }
  rec[field] = value;
  saveAll();
}

/* ---------------- time table (editable grid, viewable by everyone) ---------------- */
var timeTableViewMode = 'class';
/** Cells are stored as "Subject - Teacher"; these pull each half back out. */
function extractTeacherName(cellText){
  if(!cellText) return '';
  const parts = String(cellText).split(' - ');
  return parts.length > 1 ? parts[parts.length-1].trim() : '';
}
function extractSubject(cellText){
  if(!cellText) return '';
  const parts = String(cellText).split(' - ');
  return parts.length > 1 ? parts.slice(0,-1).join(' - ').trim() : String(cellText).trim();
}
function getAllTimetableTeacherNames(){
  const names = new Set();
  Object.values(timeTableData.cells).forEach(val => {
    const t = extractTeacherName(val);
    if(t) names.add(t);
  });
  return [...names].sort();
}
function switchTimeTableView(mode){
  timeTableViewMode = mode;
  renderTimeTable(document.getElementById('topbar'), document.getElementById('content'));
}
function renderTimeTable(topbar, content){
  const editable = canEdit('timetable');
  topbar.innerHTML = `
    <div><h1>Time Table</h1><p>${escapeHtml(SCHOOL_NAME)} · Session ${currentAcademicYear()}</p></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn ${timeTableViewMode==='class'?'btn-primary':'btn-secondary'} btn-sm" onclick="switchTimeTableView('class')">By Class</button>
      <button class="btn ${timeTableViewMode==='teacher'?'btn-primary':'btn-secondary'} btn-sm" onclick="switchTimeTableView('teacher')">By Teacher</button>
      <button class="btn btn-secondary" onclick="exportTimeTableExcel()">Download Excel</button>
      ${editable ? `<button class="btn btn-secondary" onclick="openPeriodManagerModal()">Manage periods</button>` : ''}
    </div>`;

  const periods = timeTableData.periods;
  if(periods.length===0){
    content.innerHTML = `<div class="table-wrap"><div class="empty">No periods set up yet.${editable?' Click "Manage periods" to add some.':' Ask your admin to set it up.'}</div></div>`;
    return;
  }

  if(timeTableViewMode === 'teacher'){
    const teachers = getAllTimetableTeacherNames();
    content.innerHTML = teachers.length===0 ? `<div class="table-wrap"><div class="empty">No teacher names found yet — fill in the class grid first (each cell as "Subject - Teacher").</div></div>` : `
      <div class="table-wrap" style="overflow-x:auto;"><table style="min-width:900px;">
        <thead><tr>
          <th style="white-space:nowrap;">Teacher</th>
          ${periods.map(p => `<th style="white-space:nowrap;">${escapeHtml(p.label)}${p.time?`<div style="font-weight:400;font-size:10px;color:var(--ink-soft);">${escapeHtml(p.time)}</div>`:''}</th>`).join('')}
        </tr></thead>
        <tbody>
          ${teachers.map(t => `
            <tr>
              <td style="font-weight:500;white-space:nowrap;">${escapeHtml(t)}</td>
              ${periods.map(p => {
                if(p.isBreak) return `<td style="text-align:center;color:var(--accent);font-weight:600;font-size:11px;background:var(--accent-soft);">${escapeHtml(p.label)}</td>`;
                let match = '';
                for(const cls of CLASS_LEVELS){
                  const val = timeTableData.cells[cls+'|'+p.id];
                  if(val && extractTeacherName(val) === t){ match = classDisplayLabel(cls) + ' — ' + extractSubject(val); break; }
                }
                return `<td style="font-size:11px;">${match || '<span style="color:var(--ink-soft);">Free</span>'}</td>`;
              }).join('')}
            </tr>`).join('')}
        </tbody>
      </table></div>
      <p style="font-size:11px;color:var(--ink-soft);margin-top:10px;">Derived automatically from the class grid — edit cells under "By Class" to update a teacher's schedule.</p>`;
    return;
  }

  content.innerHTML = `
    <div class="table-wrap" style="overflow-x:auto;"><table style="min-width:900px;">
      <thead><tr>
        <th style="white-space:nowrap;">Class</th>
        ${periods.map(p => `<th style="white-space:nowrap;">${escapeHtml(p.label)}${p.time?`<div style="font-weight:400;font-size:10px;color:var(--ink-soft);">${escapeHtml(p.time)}</div>`:''}</th>`).join('')}
      </tr></thead>
      <tbody>
        ${CLASS_LEVELS.map(cls => `
          <tr>
            <td style="font-weight:500;white-space:nowrap;">${classDisplayLabel(cls)}</td>
            ${periods.map(p => {
              if(p.isBreak) return `<td style="text-align:center;color:var(--accent);font-weight:600;font-size:11px;background:var(--accent-soft);">${escapeHtml(p.label)}</td>`;
              const val = timeTableData.cells[cls+'|'+p.id] || '';
              return `<td>${editable
                ? `<input type="text" value="${escapeHtml(val)}" onchange="updateTimeTableCell('${cls}','${p.id}',this.value)" style="width:100%;min-width:110px;border:1px solid var(--line);border-radius:4px;padding:4px 6px;font-size:12px;" />`
                : (val ? escapeHtml(val) : '<span style="color:var(--ink-soft);">—</span>')}</td>`;
            }).join('')}
          </tr>`).join('')}
      </tbody>
    </table></div>
    <p style="font-size:11px;color:var(--ink-soft);margin-top:10px;">Enter each cell as "Subject - Teacher" (e.g. "Maths - Sarita") — the By Teacher view is built from this automatically.</p>`;
}
function updateTimeTableCell(cls, periodId, value){
  const key = cls+'|'+periodId;
  if(value) timeTableData.cells[key] = value;
  else delete timeTableData.cells[key];
  saveAll();
}
function exportTimeTableExcel(){
  const columns = [{key:'cls', label:'Class', get:r=>classDisplayLabel(r.cls)}].concat(
    timeTableData.periods.map(p => ({
      key:p.id, label:p.label+(p.time?' ('+p.time+')':''),
      get:r => p.isBreak ? p.label : (timeTableData.cells[r.cls+'|'+p.id] || ''),
    }))
  );
  const rows = CLASS_LEVELS.map(cls => ({cls}));
  downloadCSV(columns, rows, 'timetable-'+todayIso()+'.csv');
}
function renderPeriodListRows(){
  if(timeTableData.periods.length===0) return `<p style="font-size:13px;color:var(--ink-soft);">No periods yet — add one below.</p>`;
  return `<div style="display:grid;gap:6px;">${timeTableData.periods.map(p => `
    <div style="display:flex;justify-content:space-between;align-items:center;border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:13px;">
      <span>${escapeHtml(p.label)}${p.time?' · '+escapeHtml(p.time):''}${p.isBreak?' <span class="record-tag" style="padding:1px 6px;">Break</span>':''}</span>
      <button type="button" class="btn btn-danger btn-sm" onclick="deletePeriod('${p.id}')">Remove</button>
    </div>`).join('')}</div>`;
}
function openPeriodManagerModal(){
  openModal(`
    <div class="modal-head"><h2 style="font-size:18px;">Manage periods</h2><button onclick="closeModal()">&times;</button></div>
    <div id="periodListWrap">${renderPeriodListRows()}</div>
    <form id="addPeriodForm" style="margin-top:14px;border-top:1px solid var(--line);padding-top:14px;">
      <div class="form-grid">
        <div class="field"><label>Label</label><input name="label" placeholder="e.g. Period VIII" required /></div>
        <div class="field"><label>Time</label><input name="time" placeholder="e.g. 1:45 - 2:20" /></div>
        <div class="field span2" style="display:flex;align-items:center;gap:8px;">
          <input type="checkbox" name="isBreak" id="periodIsBreak" style="width:auto;" />
          <label for="periodIsBreak" style="margin:0;font-weight:400;">This is a break (e.g. Lunch), not a teaching period</label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-block">Add period</button>
    </form>
    <div class="modal-actions"><button type="button" class="btn btn-secondary" onclick="closeModal()">Close</button></div>`);
  document.getElementById('addPeriodForm').addEventListener('submit', function(e){
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.target).entries());
    timeTableData.periods.push({id:uid('per'), label:fd.label, time:fd.time||'', isBreak: !!document.getElementById('periodIsBreak').checked});
    saveAll();
    e.target.reset();
    document.getElementById('periodListWrap').innerHTML = renderPeriodListRows();
  });
}
function deletePeriod(id){
  if(!confirm('Remove this period? Any timetable entries in this column will be lost.')) return;
  timeTableData.periods = timeTableData.periods.filter(p=>p.id!==id);
  Object.keys(timeTableData.cells).forEach(key => { if(key.endsWith('|'+id)) delete timeTableData.cells[key]; });
  saveAll();
  document.getElementById('periodListWrap').innerHTML = renderPeriodListRows();
  renderTimeTable(document.getElementById('topbar'), document.getElementById('content'));
}

/* ---------------- fees ---------------- */
function renderFees(topbar, content){
  topbar.innerHTML = `
    <div><h1>Fees</h1><p>${fees.length} fee record${fees.length===1?'':'s'} across all sessions</p></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn btn-secondary" onclick="downloadCategoryCsv('fees')">Download CSV</button>
      ${can('userManagement') ? `<button class="btn btn-secondary" onclick="goTo('dataCenter')">Data Center</button>` : ''}
      ${canEdit('fees') ? `<button class="btn btn-primary" onclick="openFeeModal()">+ Add fee record</button>` : ''}
    </div>`;

  const sessions = [...new Set([currentAcademicYear(), ...fees.map(f=>f.session)])].sort().reverse();

  content.innerHTML = `
    <div class="toolbar">
      <button type="button" class="btn btn-secondary" onclick="document.getElementById('feesFilterPanel').style.display=document.getElementById('feesFilterPanel').style.display==='none'?'flex':'none';">Filter</button>
      <div id="feesFilterPanel" style="display:none;gap:10px;flex-wrap:wrap;width:100%;background:var(--surface-alt);border-radius:8px;padding:10px 12px;">
        <select onchange="feeFilters.session=this.value; renderFeesTable();">
          <option value="">All sessions</option>
          ${sessions.map(s=>`<option value="${s}" ${feeFilters.session===s?'selected':''}>${s}</option>`).join('')}
        </select>
        <select onchange="feeFilters.cls=this.value; renderFeesTable();">
          <option value="">All classes</option>
          ${CLASS_LEVELS.map(c=>`<option value="${c}" ${feeFilters.cls===c?'selected':''}>Class ${c}</option>`).join('')}
        </select>
        <select onchange="feeFilters.status=this.value; renderFeesTable();">
          <option value="">Any status</option>
          <option value="pending" ${feeFilters.status==='pending'?'selected':''}>Pending</option>
          <option value="partial" ${feeFilters.status==='partial'?'selected':''}>Partial</option>
          <option value="paid" ${feeFilters.status==='paid'?'selected':''}>Paid</option>
        </select>
      </div>
    </div>
    <div id="feesSummary"></div>
    <div id="feesTableWrap"></div>`;
  renderFeesTable();
}
function feeStatusPill(rec){
  const st = feeStatus(rec);
  if(st==='paid') return `<span class="pill pill-good">Paid</span>`;
  if(st==='partial') return `<span class="pill pill-accent">Partial</span>`;
  return `<span class="pill pill-bad">Pending</span>`;
}
function renderFeesTable(){
  const rows = fees.map(f => Object.assign({}, f, {student: students.find(s=>s.id===f.studentId)})).filter(f => {
    if(feeFilters.session && f.session !== feeFilters.session) return false;
    if(feeFilters.cls && (!f.student || f.student.cls !== feeFilters.cls)) return false;
    if(feeFilters.status && feeStatus(f) !== feeFilters.status) return false;
    return true;
  }).sort((a,b) => (a.dueDate||'').localeCompare(b.dueDate||''));

  const totalDue = rows.reduce((s,f)=>s+(Number(f.amountDue)||0),0);
  const totalPaid = rows.reduce((s,f)=>s+(Number(f.amountPaid)||0),0);
  const totalPending = Math.max(0, totalDue-totalPaid);

  document.getElementById('feesSummary').innerHTML = `
    <div class="stat-grid" style="margin-bottom:16px;">
      <div class="stat-card"><div class="label">Total due</div><div class="value" style="font-size:24px;">${money(totalDue)}</div></div>
      <div class="stat-card good"><div class="label">Collected</div><div class="value" style="font-size:24px;">${money(totalPaid)}</div></div>
      <div class="stat-card accent"><div class="label">Pending</div><div class="value" style="font-size:24px;">${money(totalPending)}</div></div>
    </div>`;

  document.getElementById('feesTableWrap').innerHTML = rows.length===0 ? `<div class="table-wrap"><div class="empty">No fee records match these filters.</div></div>` : renderRecordBulkActionBar('fees', canEdit('fees')?'bulkDeleteSelectedFees()':null) + `
    <div class="table-wrap" id="feesTable"><table>
      <thead><tr><th><input type="checkbox" title="Select all" ${rows.length>0 && rows.every(f=>getSelectedSet('fees').has(f.id))?'checked':''} onchange="toggleAllRecordSelection('fees','feesTable',this.checked)" style="width:auto;" /></th><th>Student</th><th>Class</th><th>Session</th><th>Particulars</th><th>Total Due</th><th>Deposited</th><th>Remaining</th><th>Mode</th><th>Status</th><th>Due date</th><th></th></tr></thead>
      <tbody>
        ${rows.map(f => `
          <tr>
            <td><input type="checkbox" data-id="${f.id}" ${getSelectedSet('fees').has(f.id)?'checked':''} onchange="toggleRecordSelection('fees','${f.id}',this.checked)" style="width:auto;" /></td>
            <td>${f.student ? `<span style="font-weight:500;cursor:pointer;" onclick="goToStudent('${f.student.id}')">${escapeHtml(f.student.firstName)} ${escapeHtml(f.student.lastName)}</span>` : '<span style="color:var(--ink-soft);">Unknown student</span>'}</td>
            <td style="color:var(--ink-soft);">${f.student?escapeHtml(f.student.cls)+escapeHtml(f.student.section):'—'}</td>
            <td style="color:var(--ink-soft);">${escapeHtml(f.session)}</td>
            <td>${escapeHtml(f.particulars)}${f.particulars==='Board Exam Fee'?' <span class="record-tag" style="padding:1px 6px;">Board</span>':''}${f.negotiated?' <span class="record-tag" style="padding:1px 6px;">Negotiated</span>':''}</td>
            <td style="font-family:ui-monospace,SFMono-Regular,Consolas,monospace;">${money(f.amountDue)}</td>
            <td style="font-family:ui-monospace,SFMono-Regular,Consolas,monospace;">${money(f.amountPaid)}</td>
            <td style="font-family:ui-monospace,SFMono-Regular,Consolas,monospace;">${money(Math.max(0,(Number(f.amountDue)||0)-(Number(f.amountPaid)||0)))}</td>
            <td style="color:var(--ink-soft);">${escapeHtml(f.paymentMode)}</td>
            <td>${feeStatusPill(f)}</td>
            <td style="color:var(--ink-soft);">${formatDate(f.dueDate)}</td>
            <td style="text-align:right;white-space:nowrap;">
              ${Number(f.amountPaid)>0 ? `<button class="btn btn-secondary btn-sm" onclick="printFeeReceipt('${f.id}')">Receipt</button>` : ''}
              ${canEdit('fees') ? `
                <button class="btn btn-secondary btn-sm" onclick="openFeeModal('${f.id}')">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteFee('${f.id}')">Delete</button>
              ` : ''}
            </td>
          </tr>`).join('')}
      </tbody>
    </table></div>`;
  updateRecordBulkBar('fees');
}
function feeModalOnContextChange(){
  const form = document.getElementById('feeForm');
  if(!form) return;
  const particularsField = form.elements.namedItem('particulars');
  const negotiatedField = form.elements.namedItem('negotiated');
  if(particularsField.value === 'Other') negotiatedField.checked = true;
  const negotiated = negotiatedField.checked;
  const dueInput = form.elements.namedItem('amountDue');
  dueInput.readOnly = !negotiated;
  if(!negotiated){
    const studentId = form.elements.namedItem('studentId').value;
    dueInput.value = computeTotalDue(studentId, particularsField.value);
  }
  feeModalUpdateRemaining();
}
function feeModalUpdateRemaining(){
  const form = document.getElementById('feeForm');
  if(!form) return;
  const due = Number(form.elements.namedItem('amountDue').value) || 0;
  const paid = totalFeePaymentRows();
  const el = document.getElementById('feeRemainingDisplay');
  if(el) el.textContent = money(Math.max(0, due-paid));
  const totalEl = document.getElementById('feePaymentRowsTotal');
  if(totalEl) totalEl.textContent = money(paid);
}
var feePaymentRows = [];
function openFeeModal(existingId, presetStudentId){
  const f = existingId ? fees.find(x=>x.id===existingId) : null;
  const studentId = f ? f.studentId : presetStudentId;
  const particulars = f ? f.particulars : TERMS[0];
  const negotiated = f ? !!f.negotiated : false;
  const initialDue = f ? f.amountDue : (studentId ? computeTotalDue(studentId, particulars) : 0);

  if(f && f.paymentSplits && f.paymentSplits.length > 0){
    feePaymentRows = f.paymentSplits.map(p => ({mode:p.mode, amount:p.amount}));
  } else if(f && Number(f.amountPaid) > 0){
    feePaymentRows = [{mode: f.paymentMode || 'Cash', amount: f.amountPaid}];
  } else {
    feePaymentRows = [];
  }

  openModal(`
    <div class="modal-head"><h2 style="font-size:18px;">${f?'Edit fee record':'Add fee record'}</h2><button onclick="closeModal()">&times;</button></div>
    <form id="feeForm">
      <div class="form-grid">
        <div class="field span2"><label>Student</label>
          <select name="studentId" required onchange="feeModalOnContextChange()">
            <option value="">Select student</option>
            ${students.map(s=>`<option value="${s.id}" ${studentId===s.id?'selected':''}>${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)} (${escapeHtml(s.cls)}${escapeHtml(s.section)}) · ${escapeHtml(s.admissionNumber)}</option>`).join('')}
          </select>
        </div>
        <div class="field"><label>Session</label><input name="session" value="${escapeHtml(f?f.session:currentAcademicYear())}" required /></div>
        <div class="field"><label>Particulars</label><select name="particulars" onchange="feeModalOnContextChange()">${TERMS.map(t=>`<option ${particulars===t?'selected':''}>${t}</option>`).join('')}</select></div>

        <div class="field span2" style="display:flex;align-items:center;gap:8px;margin-top:2px;">
          <input type="checkbox" name="negotiated" id="feeNegotiatedCheckbox" style="width:auto;" ${negotiated?'checked':''} onchange="feeModalOnContextChange()" />
          <label for="feeNegotiatedCheckbox" style="margin:0;font-weight:400;">Negotiated fee — manually override the total due</label>
        </div>

        <div class="field"><label>Total Due (&#8377;)</label><input name="amountDue" value="${escapeHtml(initialDue)}" ${negotiated?'':'readonly'} oninput="feeModalUpdateRemaining()" required /></div>
        <div class="field">
          <label>Remaining Due</label>
          <div id="feeRemainingDisplay" style="padding:8px 10px;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-weight:500;color:var(--bad);background:var(--bad-soft);border-radius:6px;">${money(Math.max(0,(Number(initialDue)||0)-(Number(f?f.amountPaid:0)||0)))}</div>
        </div>

        <div class="field span2">
          <label>Payment received</label>
          <div id="feePaymentRowsWrap"></div>
          <button type="button" class="btn btn-secondary btn-sm" onclick="addFeePaymentRow()" style="margin-top:6px;">+ Add payment method</button>
          <p style="font-size:12px;color:var(--ink-soft);margin:8px 0 0;">Total received: <span id="feePaymentRowsTotal" style="font-weight:600;color:var(--ink);"></span> — add a second row if part was paid in cash and part online, so it prints as one receipt with both entries.</p>
        </div>

        <div class="field"><label>Due date</label><input type="date" name="dueDate" value="${f?.dueDate||''}" /></div>
        <div class="field"><label>Paid date</label><input type="date" name="paidDate" value="${f?.paidDate||''}" /></div>
        <div class="field span2"><label>Notes</label><input name="notes" value="${escapeHtml(f?.notes)}" /></div>
      </div>
      <p style="font-size:12px;color:var(--ink-soft);margin:14px 0 14px;">Total Due auto-fills from the class fee structure. Board Exam Fee applies to Class 5 &amp; 8 (&#8377;500) and Class 10 (&#8377;2350).</p>
      <div class="modal-actions">
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">${f?'Save changes':'Add record'}</button>
      </div>
    </form>`);
  renderFeePaymentRows();
  document.getElementById('feeForm').addEventListener('submit', function(e){
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.target).entries());
    fd.negotiated = !!document.getElementById('feeNegotiatedCheckbox').checked;
    const validRows = feePaymentRows.filter(r => Number(r.amount) > 0);
    fd.amountPaid = String(validRows.reduce((sum,r)=>sum+Number(r.amount),0));
    fd.paymentMode = validRows.map(r=>r.mode).join(' + ');
    fd.paymentSplits = validRows;
    if(f){ Object.assign(f, fd); }
    else { fd.id = uid('fee'); fees.push(fd); }
    saveAll();
    closeModal();
    if(view.name==='studentDetail') renderStudentDetail(document.getElementById('topbar'),document.getElementById('content'), view.studentId);
    else renderFees(document.getElementById('topbar'),document.getElementById('content'));
  });
}
function renderFeePaymentRows(){
  const wrap = document.getElementById('feePaymentRowsWrap');
  if(!wrap) return;
  wrap.innerHTML = feePaymentRows.length===0 ? `<p style="font-size:12px;color:var(--ink-soft);margin:0;">No payment recorded yet.</p>` : feePaymentRows.map((row,i) => `
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:6px;">
      <select onchange="feePaymentRows[${i}].mode=this.value" style="flex:1;">
        <option ${row.mode==='Cash'?'selected':''}>Cash</option>
        <option ${row.mode==='Online'?'selected':''}>Online</option>
        <option ${row.mode==='Cheque'?'selected':''}>Cheque</option>
      </select>
      <input type="number" min="0" value="${escapeHtml(row.amount)}" placeholder="Amount" oninput="feePaymentRows[${i}].amount=this.value; feeModalUpdateRemaining();" style="flex:1;" />
      <button type="button" class="btn btn-danger btn-sm" onclick="removeFeePaymentRow(${i})">&times;</button>
    </div>`).join('');
  feeModalUpdateRemaining();
}
function addFeePaymentRow(){
  feePaymentRows.push({mode:'Cash', amount:''});
  renderFeePaymentRows();
}
function removeFeePaymentRow(i){
  feePaymentRows.splice(i,1);
  renderFeePaymentRows();
}
function totalFeePaymentRows(){
  return feePaymentRows.reduce((sum,r) => sum + (Number(r.amount)||0), 0);
}
function deleteFee(id){
  if(!confirm('Delete this fee record?')) return;
  fees = fees.filter(f=>f.id!==id);
  saveAll();
  if(view.name==='studentDetail') renderStudentDetail(document.getElementById('topbar'),document.getElementById('content'), view.studentId);
  else renderFees(document.getElementById('topbar'),document.getElementById('content'));
}

/* ---------------- allocate finalized fee amount to terms ---------------- */
var ALLOCATABLE_TERMS = ['Term 1 (June-July)','Term 2 (October)','Term 3 (January)'];
var allocateFeeRows = [];
function openAllocateFeeModal(studentId){
  const s = students.find(x=>x.id===studentId);
  const total = Number(s.yearlyFeesPaid)||0;
  const existingByTerm = {};
  fees.filter(f=>f.studentId===studentId && ALLOCATABLE_TERMS.includes(f.particulars))
    .forEach(f => { existingByTerm[f.particulars] = f; });
  const defaultShare = Math.round(total/3);

  allocateFeeRows = ALLOCATABLE_TERMS.map(term => ({
    term,
    amount: existingByTerm[term] ? existingByTerm[term].amountDue : String(defaultShare),
    lockedPaid: existingByTerm[term] ? (Number(existingByTerm[term].amountPaid)||0) : 0,
  }));

  openModal(`
    <div class="modal-head"><h2 style="font-size:18px;">Allocate to Terms</h2><button onclick="closeModal()">&times;</button></div>
    <p style="font-size:13px;color:var(--ink-soft);margin:-8px 0 16px;">Split ${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}'s Finalized Fee Amount (${money(total)}) across the term-wise fee records the office tracks payment against.</p>
    <div id="allocateRowsWrap"></div>
    <p style="font-size:13px;margin-top:10px;">Allocated: <span id="allocateTotalDisplay" style="font-weight:600;"></span> of ${money(total)} \u00b7 Remaining: <span id="allocateRemainingDisplay" style="font-weight:600;"></span></p>
    <div class="modal-actions">
      <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button type="button" class="btn btn-primary" onclick="runFeeAllocation('${studentId}')">Allocate</button>
    </div>`);
  renderAllocateRows(total);
}
function renderAllocateRows(total){
  const wrap = document.getElementById('allocateRowsWrap');
  if(!wrap) return;
  wrap.innerHTML = allocateFeeRows.map((row,i) => `
    <div class="field">
      <label>${escapeHtml(row.term)}${row.lockedPaid>0?` <span style="color:var(--good);font-weight:400;">(${money(row.lockedPaid)} already paid)</span>`:''}</label>
      <input type="number" min="${row.lockedPaid}" value="${escapeHtml(row.amount)}" oninput="allocateFeeRows[${i}].amount=this.value; updateAllocateTotals(${total});" />
    </div>`).join('');
  updateAllocateTotals(total);
}
function updateAllocateTotals(total){
  const allocated = allocateFeeRows.reduce((sum,r)=>sum+(Number(r.amount)||0),0);
  const totalEl = document.getElementById('allocateTotalDisplay');
  const remEl = document.getElementById('allocateRemainingDisplay');
  if(totalEl) totalEl.textContent = money(allocated);
  if(remEl){
    const rem = total - allocated;
    remEl.textContent = (rem<0?'\u2212':'') + money(Math.abs(rem));
    remEl.style.color = rem < 0 ? 'var(--bad)' : (rem === 0 ? 'var(--good)' : 'var(--ink-soft)');
  }
}
function runFeeAllocation(studentId){
  const s = students.find(x=>x.id===studentId);
  const total = Number(s.yearlyFeesPaid)||0;
  for(const row of allocateFeeRows){
    if(Number(row.amount) < row.lockedPaid){
      alert(row.term + ' already has ' + money(row.lockedPaid) + ' paid \u2014 you can\'t allocate less than that.');
      return;
    }
  }
  const allocated = allocateFeeRows.reduce((sum,r)=>sum+(Number(r.amount)||0),0);
  if(allocated > total){
    if(!confirm('You\'ve allocated ' + money(allocated) + ', which is more than the Finalized Fee Amount of ' + money(total) + '. Continue anyway?')) return;
  }

  allocateFeeRows.forEach(row => {
    const amt = Number(row.amount)||0;
    let rec = fees.find(f=>f.studentId===studentId && f.particulars===row.term);
    if(amt <= 0){
      if(rec && Number(rec.amountPaid||0) === 0){ fees = fees.filter(f=>f.id!==rec.id); }
      return;
    }
    if(rec){
      rec.amountDue = String(amt);
    } else {
      fees.push({
        id: uid('fee'), studentId, session: s.session||currentAcademicYear(), particulars: row.term,
        amountDue: String(amt), amountPaid: '0', paymentMode: '', paymentSplits: [],
        negotiated: false, dueDate: '', paidDate: '', notes: 'Created from Allocate to Terms.',
      });
    }
  });

  s.feeAllocated = true;
  saveAll();
  closeModal();
  renderStudentDetail(document.getElementById('topbar'), document.getElementById('content'), studentId);
}

function printFeeReceipt(feeId){
  const f = fees.find(x=>x.id===feeId);
  const s = students.find(x=>x.id===f.studentId);
  const splits = (f.paymentSplits && f.paymentSplits.length>0) ? f.paymentSplits : (Number(f.amountPaid)>0 ? [{mode:f.paymentMode||'Cash', amount:f.amountPaid}] : []);
  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html><html><head><title>Receipt — ${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</title>
  <style>
    body{font-family:Georgia,serif;color:#1e2a38;max-width:640px;margin:40px auto;padding:0 24px;}
    .frame{border:2px solid #1e2a38;padding:22px 26px;}
    h1{font-size:20px;text-align:center;margin:2px 0 0;}
    .addr{text-align:center;font-size:12px;color:#5b6472;margin:4px 0 0;}
    .titlewrap{text-align:center;margin:14px 0;}
    .titlebox{background:#1e2a38;color:#fff;display:inline-block;padding:4px 22px;font-size:14px;letter-spacing:.04em;}
    .meta{display:flex;justify-content:space-between;font-size:13px;margin-bottom:14px;}
    table{width:100%;border-collapse:collapse;font-size:13px;}
    table.info td{padding:5px 4px;color:#5b6472;}
    table.info td.v{color:#1e2a38;font-weight:500;text-align:right;}
    table.splits{margin-top:14px;}
    table.splits th{text-align:left;border-bottom:1px solid #1e2a38;padding:6px 4px;font-size:12px;text-transform:uppercase;letter-spacing:.03em;}
    table.splits td{padding:7px 4px;border-bottom:1px dotted #b9b3a2;}
    table.splits td.amt{text-align:right;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;}
    tfoot td{font-weight:bold;padding-top:8px;}
    .sign{margin-top:40px;font-size:13px;display:flex;justify-content:space-between;}
    @media print{ body{margin:0 auto;} }
  </style></head><body>
    <div class="frame">
      <img src="${LOGO_DATA_URI}" alt="${escapeHtml(SCHOOL_NAME)}" style="height:52px;display:block;margin:0 auto 4px;" />
      <p class="addr">${escapeHtml(SCHOOL_ADDRESS)}</p>
      <div class="titlewrap"><span class="titlebox">Fee Receipt</span></div>
      <div class="meta"><span>Receipt No. ${escapeHtml(f.id)}</span><span>Date: ${formatDate(f.paidDate||todayIso())}</span></div>
      <table class="info">
        <tr><td>Student</td><td class="v">${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)} (${escapeHtml(s.cls)}${escapeHtml(s.section)})</td></tr>
        <tr><td>Scholar No.</td><td class="v">${escapeHtml(s.admissionNumber)}</td></tr>
        <tr><td>Particulars</td><td class="v">${escapeHtml(f.particulars)}</td></tr>
        <tr><td>Session</td><td class="v">${escapeHtml(f.session)}</td></tr>
      </table>
      <table class="splits">
        <thead><tr><th>Payment Method</th><th style="text-align:right;">Amount</th></tr></thead>
        <tbody>
          ${splits.length===0 ? `<tr><td colspan="2" style="color:#5b6472;">No payment recorded yet.</td></tr>` : splits.map(sp => `<tr><td>${escapeHtml(sp.mode)}</td><td class="amt">${money(sp.amount)}</td></tr>`).join('')}
        </tbody>
        <tfoot><tr><td>Total Received</td><td class="amt">${money(f.amountPaid)}</td></tr></tfoot>
      </table>
      <table class="info" style="margin-top:10px;">
        <tr><td>Total Due</td><td class="v">${money(f.amountDue)}</td></tr>
        <tr><td>Remaining</td><td class="v">${money(Math.max(0,(Number(f.amountDue)||0)-(Number(f.amountPaid)||0)))}</td></tr>
      </table>
      <div class="sign"><span></span><span>Received by: ___________________</span></div>
    </div>
    <script>window.onload = () => window.print();<\/script>
  </body></html>`);
  win.document.close();
}
function printStudentFeeRecord(studentId){
  const s = students.find(x=>x.id===studentId);
  if(!s) return;
  const rows = fees.filter(f=>f.studentId===studentId).sort((a,b)=>(a.dueDate||'').localeCompare(b.dueDate||''));
  const totalDue = rows.reduce((sum,f)=>sum+(Number(f.amountDue)||0),0);
  const totalPaid = rows.reduce((sum,f)=>sum+(Number(f.amountPaid)||0),0);
  const totalRemaining = Math.max(0, totalDue-totalPaid);
  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html><html><head><title>Fee Record — ${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</title>
  <style>
    body{font-family:Arial,Helvetica,sans-serif;color:#000;margin:20px;}
    h1{font-size:18px;margin:0 0 2px;text-align:center;}
    .sub{text-align:center;font-size:12px;margin:0 0 10px;color:#000;}
    .meta{font-size:12px;margin-bottom:14px;display:flex;justify-content:space-between;}
    table{width:100%;border-collapse:collapse;font-size:11px;margin-bottom:16px;}
    th,td{border:1px solid #000;padding:5px 6px;text-align:left;background:#fff;color:#000;}
    th{font-weight:bold;}
    .summary{display:flex;gap:0;border:1px solid #000;margin-bottom:16px;}
    .summary div{flex:1;text-align:center;padding:10px;border-right:1px solid #000;}
    .summary div:last-child{border-right:none;}
    .summary .lbl{font-size:11px;text-transform:uppercase;letter-spacing:.03em;}
    .summary .val{font-size:18px;font-weight:bold;margin-top:4px;}
    @media print{ body{margin:8mm;} }
  </style></head><body>
    <img src="${LOGO_DATA_URI}" alt="Bombay Kids International School" style="height:60px;display:block;margin:0 auto 6px;" />
    <p class="sub">${escapeHtml(SCHOOL_ADDRESS)}</p>
    <div class="meta">
      <span>Fee Record: ${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)} — ${escapeHtml(s.admissionNumber)} — Class ${escapeHtml(s.cls)}${escapeHtml(s.section)}</span>
      <span>Generated ${formatDate(todayIso())}</span>
    </div>
    <div class="summary">
      <div><div class="lbl">Total</div><div class="val">${money(totalDue)}</div></div>
      <div><div class="lbl">Paid</div><div class="val">${money(totalPaid)}</div></div>
      <div><div class="lbl">Remaining</div><div class="val">${money(totalRemaining)}</div></div>
    </div>
    <table>
      <thead><tr><th>Session</th><th>Particulars</th><th>Total Due</th><th>Deposited</th><th>Remaining</th><th>Mode</th><th>Due Date</th><th>Paid Date</th></tr></thead>
      <tbody>
        ${rows.length===0 ? `<tr><td colspan="8" style="text-align:center;">No fee records on file.</td></tr>` : rows.map(f => `
          <tr>
            <td>${escapeHtml(f.session)}</td>
            <td>${escapeHtml(f.particulars)}</td>
            <td>${money(f.amountDue)}</td>
            <td>${money(f.amountPaid)}</td>
            <td>${money(Math.max(0,(Number(f.amountDue)||0)-(Number(f.amountPaid)||0)))}</td>
            <td>${escapeHtml(f.paymentMode||'—')}</td>
            <td>${formatDate(f.dueDate)}</td>
            <td>${formatDate(f.paidDate)}</td>
          </tr>`).join('')}
      </tbody>
    </table>
    <script>window.onload = () => window.print();<\/script>
  </body></html>`);
  win.document.close();
}

/* ---------------- expenses ---------------- */
var EXPENSE_CATEGORIES = ['Stationery','Maintenance & Repairs','Utilities','Events & Activities','Transport','Furniture & Equipment','Miscellaneous'];
function renderExpenses(topbar, content){
  topbar.innerHTML = `
    <div><h1>Expenses</h1><p>${expenses.length} expense record${expenses.length===1?'':'s'} on file</p></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn btn-secondary" onclick="downloadCategoryCsv('expenses')">Download CSV</button>
      ${can('userManagement') ? `<button class="btn btn-secondary" onclick="goTo('dataCenter')">Data Center</button>` : ''}
      ${canEdit('expenses') ? `<button class="btn btn-primary" onclick="openExpenseModal()">+ Add expense</button>` : ''}
    </div>`;

  const months = [...new Set([currentMonthKey(), ...expenses.map(e=>(e.date||'').slice(0,7))])].filter(Boolean).sort().reverse();
  content.innerHTML = `
    <div class="toolbar">
      <button type="button" class="btn btn-secondary" onclick="document.getElementById('expensesFilterPanel').style.display=document.getElementById('expensesFilterPanel').style.display==='none'?'flex':'none';">Filter</button>
      <div id="expensesFilterPanel" style="display:none;gap:10px;flex-wrap:wrap;width:100%;background:var(--surface-alt);border-radius:8px;padding:10px 12px;">
        <select id="expenseMonthFilter" onchange="renderExpensesTable()">
          <option value="">All time</option>
          ${months.map(m=>`<option value="${m}">${monthLabel(m)}</option>`).join('')}
        </select>
        <select id="expenseCategoryFilter" onchange="renderExpensesTable()">
          <option value="">All categories</option>
          ${EXPENSE_CATEGORIES.map(c=>`<option value="${c}">${c}</option>`).join('')}
        </select>
      </div>
    </div>
    <div id="expensesSummary"></div>
    <div id="expensesTableWrap"></div>`;
  renderExpensesTable();
}
function renderExpensesTable(){
  const monthFilter = document.getElementById('expenseMonthFilter') ? document.getElementById('expenseMonthFilter').value : '';
  const catFilter = document.getElementById('expenseCategoryFilter') ? document.getElementById('expenseCategoryFilter').value : '';
  const rows = expenses.filter(e => {
    if(monthFilter && (e.date||'').slice(0,7) !== monthFilter) return false;
    if(catFilter && e.category !== catFilter) return false;
    return true;
  }).sort((a,b) => (b.date||'').localeCompare(a.date||''));

  const total = rows.reduce((s,e)=>s+(Number(e.amount)||0),0);
  document.getElementById('expensesSummary').innerHTML = `
    <div class="stat-grid" style="margin-bottom:16px;">
      <div class="stat-card accent"><div class="label">Total (filtered)</div><div class="value" style="font-size:26px;">${money(total)}</div></div>
    </div>`;

  const editable = canEdit('expenses');
  document.getElementById('expensesTableWrap').innerHTML = rows.length===0 ? `<div class="table-wrap"><div class="empty">No expenses recorded${monthFilter||catFilter?' for these filters':' yet'}.</div></div>` : renderRecordBulkActionBar('expenses', editable?'bulkDeleteSelectedExpenses()':null) + `
    <div class="table-wrap" id="expensesTable"><table>
      <thead><tr><th><input type="checkbox" title="Select all" ${rows.length>0 && rows.every(e=>getSelectedSet('expenses').has(e.id))?'checked':''} onchange="toggleAllRecordSelection('expenses','expensesTable',this.checked)" style="width:auto;" /></th><th>Date</th><th>Category</th><th>Description</th><th>Amount</th><th>Payment Mode</th><th></th></tr></thead>
      <tbody>
        ${rows.map(e => `
          <tr>
            <td><input type="checkbox" data-id="${e.id}" ${getSelectedSet('expenses').has(e.id)?'checked':''} onchange="toggleRecordSelection('expenses','${e.id}',this.checked)" style="width:auto;" /></td>
            <td style="color:var(--ink-soft);">${formatDate(e.date)}</td>
            <td><span class="record-tag">${escapeHtml(e.category)}</span></td>
            <td>${escapeHtml(e.description)}</td>
            <td style="font-family:ui-monospace,SFMono-Regular,Consolas,monospace;">${money(e.amount)}</td>
            <td style="color:var(--ink-soft);">${escapeHtml(e.paymentMode)}</td>
            <td style="text-align:right;white-space:nowrap;">
              ${editable ? `
                <button class="btn btn-secondary btn-sm" onclick="openExpenseModal('${e.id}')">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteExpense('${e.id}')">Delete</button>
              ` : ''}
            </td>
          </tr>`).join('')}
      </tbody>
    </table></div>`;
  updateRecordBulkBar('expenses');
}
function openExpenseModal(existingId){
  const e = existingId ? expenses.find(x=>x.id===existingId) : null;
  openModal(`
    <div class="modal-head"><h2 style="font-size:18px;">${e?'Edit expense':'Add expense'}</h2><button onclick="closeModal()">&times;</button></div>
    <form id="expenseForm">
      <div class="form-grid">
        <div class="field"><label>Date</label><input type="date" name="date" value="${e?e.date:todayIso()}" required /></div>
        <div class="field"><label>Category</label>
          <select name="category">${EXPENSE_CATEGORIES.map(c=>`<option ${e&&e.category===c?'selected':''}>${c}</option>`).join('')}</select>
        </div>
        <div class="field span2"><label>Description</label><input name="description" value="${escapeHtml(e?.description)}" required /></div>
        <div class="field"><label>Amount (&#8377;)</label><input name="amount" value="${escapeHtml(e?.amount)}" required /></div>
        <div class="field"><label>Payment mode</label>
          <select name="paymentMode"><option ${(!e||e.paymentMode==='Cash')?'selected':''}>Cash</option><option ${e&&e.paymentMode==='Online'?'selected':''}>Online</option><option ${e&&e.paymentMode==='Cheque'?'selected':''}>Cheque</option></select>
        </div>
        <div class="field span2"><label>Notes</label><input name="notes" value="${escapeHtml(e?.notes)}" /></div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">${e?'Save changes':'Add expense'}</button>
      </div>
    </form>`);
  document.getElementById('expenseForm').addEventListener('submit', function(ev){
    ev.preventDefault();
    const fd = Object.fromEntries(new FormData(ev.target).entries());
    if(e){ Object.assign(e, fd); }
    else { fd.id = uid('exp'); expenses.push(fd); }
    saveAll();
    closeModal();
    renderExpenses(document.getElementById('topbar'),document.getElementById('content'));
  });
}
function deleteExpense(id){
  if(!confirm('Delete this expense record?')) return;
  expenses = expenses.filter(e=>e.id!==id);
  saveAll();
  renderExpenses(document.getElementById('topbar'),document.getElementById('content'));
}

/* ---------------- distribution (items handed out: ID cards, diaries, etc.) ---------------- */
function renderDistribution(topbar, content){
  topbar.innerHTML = `
    <div><h1>Distribution</h1><p>Track who's received ID cards, diaries, books, or anything else handed out.</p></div>
    ${canEdit('distribution') ? `<button class="btn btn-secondary" onclick="openDistItemModal()">+ New item</button>` : ''}`;

  content.innerHTML = `
    <div class="toolbar">
      <select id="distItemSelect" onchange="loadDistributionItem()">
        <option value="">Select item</option>
        ${distributionItems.map(i=>`<option value="${i.id}" ${distributionView.itemId===i.id?'selected':''}>${escapeHtml(i.name)}</option>`).join('')}
      </select>
    </div>
    <div id="distributionClassBlocksWrap"></div>`;
  renderDistributionClassBlocks();
}
function loadDistributionItem(){
  distributionView.itemId = document.getElementById('distItemSelect').value;
  renderDistributionClassBlocks();
}
function renderDistributionClassBlocks(){
  const wrap = document.getElementById('distributionClassBlocksWrap');
  if(!distributionView.itemId){
    wrap.innerHTML = `<div class="table-wrap"><div class="empty">${distributionItems.length===0 ? "Create an item above, then pick a class to track who's received it." : "Choose an item above to see distribution by class."}</div></div>`;
    return;
  }
  const classCounts = CLASS_LEVELS.map(c => {
    const roster = students.filter(s=>s.cls===c && s.status==='active');
    const receivedIds = new Set(distributionRecords.filter(r=>r.itemId===distributionView.itemId && r.cls===c).map(r=>r.studentId));
    return { label:c, board: BOARD_CLASSES.includes(c), total: roster.length, received: roster.filter(s=>receivedIds.has(s.id)).length };
  });
  wrap.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px;">
      ${classCounts.map(c => `
        <button onclick="goToDistributionClass('${c.label}')" style="text-align:left;background:var(--surface);border:1px solid var(--line);border-radius:8px;padding:12px 14px;cursor:pointer;font-family:inherit;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:14px;font-weight:600;">${classDisplayLabel(c.label)}</span>
            ${c.board?'<span class="record-tag" style="padding:1px 6px;">Board</span>':''}
          </div>
          <div style="margin-top:10px;height:6px;background:var(--surface-alt);border-radius:99px;overflow:hidden;">
            <span style="display:block;height:100%;background:var(--good);width:${c.total?((c.received/c.total)*100):0}%;"></span>
          </div>
          <div style="margin-top:8px;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:13px;">${c.received} / ${c.total} received</div>
        </button>`).join('')}
    </div>`;
}
function goToDistributionClass(cls){
  distributionView.cls = cls;
  view = { name: 'distributionClass', studentId: null, cls };
  renderSidebar();
  renderApp();
}
function renderDistributionClassDetail(topbar, content, cls){
  const item = distributionItems.find(i=>i.id===distributionView.itemId);
  topbar.innerHTML = `
    <div>
      <button class="btn btn-secondary btn-sm" onclick="goTo('distribution')" style="margin-bottom:8px;">&larr; All classes</button>
      <h1>${classDisplayLabel(cls)}</h1>
      <p>${escapeHtml(item?item.name:'')}</p>
    </div>`;
  content.innerHTML = `<div id="distributionWrap"></div>`;
  renderDistributionRoster();
}
function renderDistributionRoster(){
  const wrap = document.getElementById('distributionWrap');
  if(!distributionView.itemId || !distributionView.cls){
    wrap.innerHTML = `<div class="table-wrap"><div class="empty">${distributionItems.length===0 ? "Create an item above, then pick a class to track who's received it." : "Choose an item and a class to see who's received it."}</div></div>`;
    return;
  }
  const roster = students.filter(s=>s.cls===distributionView.cls && s.status==='active').sort((a,b)=>a.firstName.localeCompare(b.firstName));
  const editable = canEdit('distribution');
  const received = {};
  distributionRecords.filter(r=>r.itemId===distributionView.itemId && r.cls===distributionView.cls).forEach(r => { received[r.studentId] = r.date; });
  const receivedCount = roster.filter(s=>received[s.id]).length;

  if(roster.length===0){ wrap.innerHTML = `<div class="table-wrap"><div class="empty">No active students in ${classDisplayLabel(distributionView.cls)}.</div></div>`; return; }

  wrap.innerHTML = `
    <p style="font-size:13px;color:var(--ink-soft);margin-bottom:12px;">${receivedCount} of ${roster.length} received</p>
    <div class="table-wrap"><table>
      <thead><tr><th>Student</th><th>Scholar No.</th><th>Status</th></tr></thead>
      <tbody>
        ${roster.map(s => `
          <tr>
            <td style="font-weight:500;">${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</td>
            <td><span class="record-tag">${escapeHtml(s.admissionNumber)}</span></td>
            <td>
              ${editable ? `
                <label style="display:flex;align-items:center;gap:6px;font-size:13px;cursor:pointer;">
                  <input type="checkbox" ${received[s.id]?'checked':''} onchange="toggleDistribution('${s.id}',this.checked)" style="width:auto;" />
                  ${received[s.id] ? 'Received '+formatDate(received[s.id]) : 'Not yet'}
                </label>
              ` : (received[s.id] ? `<span class="pill pill-good">Received ${formatDate(received[s.id])}</span>` : `<span class="pill pill-neutral">Not yet</span>`)}
            </td>
          </tr>`).join('')}
      </tbody>
    </table></div>`;
}
function toggleDistribution(studentId, checked){
  const itemId = distributionView.itemId, cls = distributionView.cls;
  if(checked){
    distributionRecords.push({id:uid('dist'), itemId, studentId, cls, date: todayIso()});
  } else {
    distributionRecords = distributionRecords.filter(r => !(r.itemId===itemId && r.studentId===studentId));
  }
  saveAll();
  renderDistributionRoster();
}
function openDistItemModal(){
  openModal(`
    <div class="modal-head"><h2 style="font-size:18px;">New distribution item</h2><button onclick="closeModal()">&times;</button></div>
    <form id="distItemForm">
      <div class="field"><label>Item name</label><input name="name" placeholder="e.g. ID Card 2026-27, Diary, Winter Uniform" required /></div>
      <div class="modal-actions">
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">Add item</button>
      </div>
    </form>`);
  document.getElementById('distItemForm').addEventListener('submit', function(e){
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.target).entries());
    fd.id = uid('ditem');
    fd.createdAt = todayIso();
    distributionItems.push(fd);
    saveAll();
    closeModal();
    renderDistribution(document.getElementById('topbar'), document.getElementById('content'));
  });
}

/* ---------------- notices (student / staff / rules) ---------------- */
function renderNotices(topbar, content){
  topbar.innerHTML = `
    <div><h1>Notices</h1><p>Announcements and rules for students and staff.</p></div>
    ${canEdit('notices') ? `<button class="btn btn-primary" onclick="openNoticeModal()">+ New notice</button>` : ''}`;

  content.innerHTML = `
    <div style="display:flex;gap:6px;margin-bottom:16px;">
      <button class="btn ${noticesTab==='students'?'btn-primary':'btn-secondary'} btn-sm" onclick="switchNoticesTab('students')">Student Notices</button>
      <button class="btn ${noticesTab==='staff'?'btn-primary':'btn-secondary'} btn-sm" onclick="switchNoticesTab('staff')">Staff Notices</button>
      <button class="btn ${noticesTab==='rules'?'btn-primary':'btn-secondary'} btn-sm" onclick="switchNoticesTab('rules')">Rules</button>
    </div>
    <div id="noticesListWrap"></div>`;
  renderNoticesList();
}
function switchNoticesTab(tab){
  noticesTab = tab;
  renderNotices(document.getElementById('topbar'), document.getElementById('content'));
}
function renderNoticesList(){
  const wrap = document.getElementById('noticesListWrap');
  const rows = notices.filter(n=>n.category===noticesTab).sort((a,b) => (b.pinned?1:0)-(a.pinned?1:0) || (b.datePosted||'').localeCompare(a.datePosted||''));
  const editable = canEdit('notices');
  if(rows.length===0){ wrap.innerHTML = `<div class="table-wrap"><div class="empty">No ${noticesTab==='rules'?'rules':'notices'} posted yet.</div></div>`; return; }
  wrap.innerHTML = rows.map(n => `
    <div class="card" style="margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;">
        <div>
          <p style="margin:0;font-weight:600;font-family:Georgia,'Times New Roman',serif;font-size:16px;">${n.pinned?'&#128204; ':''}${escapeHtml(n.title)}</p>
          <p style="margin:2px 0 0;font-size:12px;color:var(--ink-soft);">${formatDate(n.datePosted)}</p>
        </div>
        ${editable ? `
          <div style="display:flex;gap:6px;flex-shrink:0;">
            <button class="btn btn-secondary btn-sm" onclick="openNoticeModal('${n.id}')">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteNotice('${n.id}')">Delete</button>
          </div>` : ''}
      </div>
      <p style="margin:10px 0 0;font-size:14px;white-space:pre-wrap;">${escapeHtml(n.body)}</p>
    </div>`).join('');
}
function openNoticeModal(existingId){
  const n = existingId ? notices.find(x=>x.id===existingId) : null;
  const cat = n ? n.category : noticesTab;
  openModal(`
    <div class="modal-head"><h2 style="font-size:18px;">${n?'Edit notice':'New notice'}</h2><button onclick="closeModal()">&times;</button></div>
    <form id="noticeForm">
      <div class="field"><label>Category</label>
        <select name="category">
          <option value="students" ${cat==='students'?'selected':''}>Student Notice</option>
          <option value="staff" ${cat==='staff'?'selected':''}>Staff Notice</option>
          <option value="rules" ${cat==='rules'?'selected':''}>Rule</option>
        </select>
      </div>
      <div class="field"><label>Title</label><input name="title" value="${escapeHtml(n?.title)}" required /></div>
      <div class="field"><label>Details</label><textarea name="body" rows="5" required>${escapeHtml(n?.body)}</textarea></div>
      <div class="field" style="display:flex;align-items:center;gap:8px;">
        <input type="checkbox" name="pinned" id="noticePinned" ${n&&n.pinned?'checked':''} style="width:auto;" />
        <label for="noticePinned" style="margin:0;font-weight:400;">Pin to top</label>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">${n?'Save changes':'Post notice'}</button>
      </div>
    </form>`);
  document.getElementById('noticeForm').addEventListener('submit', function(e){
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.target).entries());
    fd.pinned = !!document.getElementById('noticePinned').checked;
    if(n){ Object.assign(n, fd); }
    else { fd.id = uid('notice'); fd.datePosted = todayIso(); notices.push(fd); }
    saveAll();
    closeModal();
    noticesTab = fd.category;
    renderNotices(document.getElementById('topbar'), document.getElementById('content'));
  });
}
function deleteNotice(id){
  if(!confirm('Delete this notice?')) return;
  notices = notices.filter(n=>n.id!==id);
  saveAll();
  renderNotices(document.getElementById('topbar'), document.getElementById('content'));
}

/* ---------------- salary ---------------- */
function renderSalary(topbar, content){
  topbar.innerHTML = `
    <div><h1>Salary</h1><p>${salaries.length} salary record${salaries.length===1?'':'s'} on file</p></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn btn-secondary" onclick="downloadCategoryCsv('salary')">Download CSV</button>
      ${can('userManagement') ? `<button class="btn btn-secondary" onclick="goTo('dataCenter')">Data Center</button>` : ''}
      ${canEdit('salary') ? `<button class="btn btn-primary" onclick="openSalaryModal()">+ Add salary record</button>` : ''}
    </div>`;

  const months = [...new Set([currentMonthKey(), ...salaries.map(s=>s.month)])].sort().reverse();

  content.innerHTML = `
    <div class="toolbar">
      <button type="button" class="btn btn-secondary" onclick="document.getElementById('salaryFilterPanel').style.display=document.getElementById('salaryFilterPanel').style.display==='none'?'flex':'none';">Filter</button>
      <div id="salaryFilterPanel" style="display:none;gap:10px;flex-wrap:wrap;width:100%;background:var(--surface-alt);border-radius:8px;padding:10px 12px;">
        <select onchange="salaryFilters.month=this.value; renderSalaryTable();">
          <option value="">All months</option>
          ${months.map(m=>`<option value="${m}" ${salaryFilters.month===m?'selected':''}>${monthLabel(m)}</option>`).join('')}
        </select>
        <select onchange="salaryFilters.status=this.value; renderSalaryTable();">
          <option value="">Any status</option>
          <option value="pending" ${salaryFilters.status==='pending'?'selected':''}>Pending</option>
          <option value="partial" ${salaryFilters.status==='partial'?'selected':''}>Partial</option>
          <option value="paid" ${salaryFilters.status==='paid'?'selected':''}>Paid</option>
        </select>
      </div>
    </div>
    <div id="salarySummary"></div>
    <div id="salaryTableWrap"></div>`;
  renderSalaryTable();
}
function renderSalaryTable(){
  const rows = salaries.map(s => Object.assign({}, s, {staff: staffList.find(m=>m.id===s.staffId)})).filter(s => {
    if(salaryFilters.month && s.month !== salaryFilters.month) return false;
    if(salaryFilters.status && feeStatus(s) !== salaryFilters.status) return false;
    return true;
  }).sort((a,b) => (b.month||'').localeCompare(a.month||''));

  const totalDue = rows.reduce((s,r)=>s+(Number(r.amountDue)||0),0);
  const totalPaid = rows.reduce((s,r)=>s+(Number(r.amountPaid)||0),0);
  const totalPending = Math.max(0, totalDue-totalPaid);

  document.getElementById('salarySummary').innerHTML = `
    <div class="stat-grid" style="margin-bottom:16px;">
      <div class="stat-card"><div class="label">Total due</div><div class="value" style="font-size:24px;">${money(totalDue)}</div></div>
      <div class="stat-card good"><div class="label">Paid</div><div class="value" style="font-size:24px;">${money(totalPaid)}</div></div>
      <div class="stat-card accent"><div class="label">Pending</div><div class="value" style="font-size:24px;">${money(totalPending)}</div></div>
    </div>`;

  document.getElementById('salaryTableWrap').innerHTML = rows.length===0 ? `<div class="table-wrap"><div class="empty">No salary records match these filters.</div></div>` : renderRecordBulkActionBar('salary', canEdit('salary')?'bulkDeleteSelectedSalary()':null) + `
    <div class="table-wrap" id="salaryTable"><table>
      <thead><tr><th><input type="checkbox" title="Select all" ${rows.length>0 && rows.every(r=>getSelectedSet('salary').has(r.id))?'checked':''} onchange="toggleAllRecordSelection('salary','salaryTable',this.checked)" style="width:auto;" /></th><th>Staff</th><th>Role</th><th>Month</th><th>Due</th><th>Paid</th><th>Status</th><th>Paid date</th><th></th></tr></thead>
      <tbody>
        ${rows.map(r => `
          <tr>
            <td><input type="checkbox" data-id="${r.id}" ${getSelectedSet('salary').has(r.id)?'checked':''} onchange="toggleRecordSelection('salary','${r.id}',this.checked)" style="width:auto;" /></td>
            <td style="font-weight:500;">${r.staff?escapeHtml(r.staff.firstName)+' '+escapeHtml(r.staff.lastName):'<span style="color:var(--ink-soft);">Unknown staff</span>'}</td>
            <td style="color:var(--ink-soft);">${r.staff?escapeHtml(r.staff.role):'—'}</td>
            <td style="color:var(--ink-soft);">${monthLabel(r.month)}</td>
            <td style="font-family:ui-monospace,SFMono-Regular,Consolas,monospace;">${money(r.amountDue)}</td>
            <td style="font-family:ui-monospace,SFMono-Regular,Consolas,monospace;">${money(r.amountPaid)}</td>
            <td>${feeStatusPill(r)}</td>
            <td style="color:var(--ink-soft);">${formatDate(r.paidDate)}</td>
            <td style="text-align:right;white-space:nowrap;">
              ${canEdit('salary') ? `
                <button class="btn btn-secondary btn-sm" onclick="openSalaryModal('${r.id}')">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteSalary('${r.id}')">Delete</button>
              ` : ''}
            </td>
          </tr>`).join('')}
      </tbody>
    </table></div>`;
  updateRecordBulkBar('salary');
}
function openSalaryModal(existingId, presetStaffId){
  const r = existingId ? salaries.find(x=>x.id===existingId) : null;
  const staffId = r ? r.staffId : presetStaffId;
  openModal(`
    <div class="modal-head"><h2 style="font-size:18px;">${r?'Edit salary record':'Add salary record'}</h2><button onclick="closeModal()">&times;</button></div>
    <form id="salaryForm">
      <div class="form-grid">
        <div class="field span2"><label>Staff member</label>
          <select name="staffId" required>
            <option value="">Select staff</option>
            ${staffList.map(m=>`<option value="${m.id}" ${staffId===m.id?'selected':''}>${escapeHtml(m.firstName)} ${escapeHtml(m.lastName)} · ${escapeHtml(m.role)} (${escapeHtml(m.employeeId)})</option>`).join('')}
          </select>
        </div>
        <div class="field"><label>Month</label><input type="month" name="month" value="${r?r.month:currentMonthKey()}" required /></div>
        <div class="field"><label>Amount due (&#8377;)</label><input name="amountDue" value="${escapeHtml(r?.amountDue)}" required /></div>
        <div class="field"><label>Amount paid (&#8377;)</label><input name="amountPaid" value="${escapeHtml(r?r.amountPaid:'0')}" /></div>
        <div class="field"><label>Paid date</label><input type="date" name="paidDate" value="${r?.paidDate||''}" /></div>
        <div class="field span2"><label>Notes</label><input name="notes" value="${escapeHtml(r?.notes)}" /></div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">${r?'Save changes':'Add record'}</button>
      </div>
    </form>`);
  document.getElementById('salaryForm').addEventListener('submit', function(e){
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.target).entries());
    if(r){ Object.assign(r, fd); }
    else { fd.id = uid('sal'); salaries.push(fd); }
    saveAll();
    closeModal();
    renderSalary(document.getElementById('topbar'),document.getElementById('content'));
  });
}
function deleteSalary(id){
  if(!confirm('Delete this salary record?')) return;
  salaries = salaries.filter(s=>s.id!==id);
  saveAll();
  renderSalary(document.getElementById('topbar'),document.getElementById('content'));
}

/* ---------------- excel export & print rosters ---------------- */
const STUDENT_STATUS_LABELS = {active:'Active', inactive:'Inactive', tc_issued:'TC Issued'};
const STAFF_STATUS_LABELS = {active:'Active', on_leave:'On Leave', inactive:'Inactive'};

const STUDENT_COLUMNS = [
  {key:'admissionNumber', label:'Scholar No.', group:'Basic', get:s=>s.admissionNumber},
  {key:'fullName', label:'Student Name', group:'Basic', get:s=>`${s.firstName||''} ${s.lastName||''}`.trim()},
  {key:'gender', label:'Gender', group:'Basic', get:s=>s.gender},
  {key:'dob', label:'Date of Birth', group:'Basic', get:s=>formatDate(s.dob)},
  {key:'placeOfBirth', label:'Place of Birth', group:'Basic', get:s=>s.placeOfBirth},
  {key:'nationality', label:'Nationality', group:'Basic', get:s=>s.nationality},
  {key:'religion', label:'Religion', group:'Basic', get:s=>s.religion},
  {key:'caste', label:'Caste', group:'Basic', get:s=>s.caste},
  {key:'category', label:'Category', group:'Basic', get:s=>s.category},
  {key:'motherTongue', label:'Mother Tongue', group:'Basic', get:s=>s.motherTongue},
  {key:'bloodGroup', label:'Blood Group', group:'Basic', get:s=>s.bloodGroup},
  {key:'weight', label:'Weight (kg)', group:'Basic', get:s=>s.weight},
  {key:'height', label:'Height (cm)', group:'Basic', get:s=>s.height},

  {key:'cls', label:'Class', group:'Academic', get:s=>s.cls},
  {key:'section', label:'Section', group:'Academic', get:s=>s.section},
  {key:'rollNumber', label:'Roll No.', group:'Academic', get:s=>s.rollNumber},
  {key:'status', label:'Status', group:'Academic', get:s=>STUDENT_STATUS_LABELS[s.status]||s.status},
  {key:'medium', label:'Medium', group:'Academic', get:s=>s.medium},
  {key:'session', label:'Session', group:'Academic', get:s=>s.session},
  {key:'admissionDate', label:'Admission Date', group:'Academic', get:s=>formatDate(s.admissionDate)},
  {key:'previousSchool', label:'Previous School', group:'Academic', get:s=>s.previousSchool},
  {key:'previousClassStudied', label:'Previous Class', group:'Academic', get:s=>s.previousClassStudied},
  {key:'previousSession', label:'Previous Session', group:'Academic', get:s=>s.previousSession},
  {key:'previousResult', label:'Previous Result', group:'Academic', get:s=>s.previousResult},
  {key:'admissionFeesPaid', label:'Admission Fees Paid', group:'Academic', get:s=>s.admissionFeesPaid},
  {key:'yearlyFeesPaid', label:"1 Year's Fees Paid", group:'Academic', get:s=>s.yearlyFeesPaid},

  {key:'studentAadhar', label:"Student's Aadhar", group:'Government IDs', get:s=>s.studentAadhar},
  {key:'fatherAadhar', label:"Father's Aadhar", group:'Government IDs', get:s=>s.fatherAadhar},
  {key:'motherAadhar', label:"Mother's Aadhar", group:'Government IDs', get:s=>s.motherAadhar},
  {key:'studentPEN', label:'PEN Card', group:'Government IDs', get:s=>s.studentPEN},
  {key:'studentAPAR', label:'APAR ID', group:'Government IDs', get:s=>s.studentAPAR},
  {key:'studentSSSM', label:'Student SSSM ID', group:'Government IDs', get:s=>s.studentSSSM},
  {key:'familySSSM', label:'Family SSSM ID', group:'Government IDs', get:s=>s.familySSSM},

  {key:'phone', label:'Phone', group:'Contact & Address', get:s=>s.phone},
  {key:'whatsapp', label:'WhatsApp', group:'Contact & Address', get:s=>s.whatsapp},
  {key:'email', label:'Email', group:'Contact & Address', get:s=>s.email},
  {key:'address', label:'Address', group:'Contact & Address', get:s=>s.address},
  {key:'city', label:'City', group:'Contact & Address', get:s=>s.city},
  {key:'pincode', label:'Pin Code', group:'Contact & Address', get:s=>s.pincode},
  {key:'permanentAddress', label:'Permanent Address', group:'Contact & Address', get:s=>s.permanentAddress},

  {key:'fatherName', label:"Father's Name", group:'Parent / Guardian', get:s=>s.fatherName},
  {key:'fatherPhone', label:"Father's Phone", group:'Parent / Guardian', get:s=>s.fatherPhone},
  {key:'fatherEducation', label:"Father's Education", group:'Parent / Guardian', get:s=>s.fatherEducation},
  {key:'fatherOccupation', label:"Father's Occupation", group:'Parent / Guardian', get:s=>s.fatherOccupation},
  {key:'motherName', label:"Mother's Name", group:'Parent / Guardian', get:s=>s.motherName},
  {key:'motherPhone', label:"Mother's Phone", group:'Parent / Guardian', get:s=>s.motherPhone},
  {key:'motherEducation', label:"Mother's Education", group:'Parent / Guardian', get:s=>s.motherEducation},
  {key:'motherOccupation', label:"Mother's Occupation", group:'Parent / Guardian', get:s=>s.motherOccupation},
  {key:'guardianName', label:"Guardian's Name", group:'Parent / Guardian', get:s=>s.guardianName},
  {key:'guardianRelation', label:'Relationship', group:'Parent / Guardian', get:s=>s.guardianRelation},
  {key:'guardianPhone', label:"Guardian's Phone", group:'Parent / Guardian', get:s=>s.guardianPhone},

  {key:'bankAccountNumber', label:'Bank Account No.', group:'Bank', get:s=>s.bankAccountNumber},
  {key:'bankName', label:'Bank Name', group:'Bank', get:s=>s.bankName},
  {key:'ifscCode', label:'IFSC Code', group:'Bank', get:s=>s.ifscCode},

  {key:'transportMode', label:'Transport Mode', group:'Transport', get:s=>s.transportMode},
  {key:'pickupPersonName', label:'Picked Up By', group:'Transport', get:s=>s.pickupPersonName},
  {key:'pickupPersonPhone', label:'Pickup Phone', group:'Transport', get:s=>s.pickupPersonPhone},
  {key:'driverName', label:"Driver's Name", group:'Transport', get:s=>s.driverName},
  {key:'driverPhone', label:"Driver's Phone", group:'Transport', get:s=>s.driverPhone},
  {key:'vehicleNumber', label:'Vehicle No.', group:'Transport', get:s=>s.vehicleNumber},
];
const STUDENT_PRESETS = [
  {name:'Basic Roster', keys:['admissionNumber','fullName','cls','section','rollNumber','status']},
  {name:'Contact List', keys:['fullName','cls','section','phone','whatsapp','fatherName','fatherPhone','motherName','motherPhone','address','city']},
  {name:'Government IDs', keys:['fullName','cls','section','studentAadhar','studentPEN','studentAPAR','studentSSSM','familySSSM']},
  {name:'Transport List', keys:['fullName','cls','section','transportMode','pickupPersonName','pickupPersonPhone','driverName','driverPhone','vehicleNumber']},
  {name:'All Fields', keys:STUDENT_COLUMNS.map(c=>c.key)},
];

const STAFF_COLUMNS = [
  {key:'employeeId', label:'Employee ID', group:'Details', get:m=>m.employeeId},
  {key:'firstName', label:'First Name', group:'Details', get:m=>m.firstName},
  {key:'lastName', label:'Last Name', group:'Details', get:m=>m.lastName},
  {key:'role', label:'Role', group:'Details', get:m=>m.role},
  {key:'department', label:'Department', group:'Details', get:m=>m.department},
  {key:'phone', label:'Contact', group:'Details', get:m=>m.phone},
  {key:'email', label:'Email', group:'Details', get:m=>m.email},
  {key:'dateOfJoining', label:'Date of Joining', group:'Details', get:m=>formatDate(m.dateOfJoining)},
  {key:'employmentStatus', label:'Status', group:'Details', get:m=>STAFF_STATUS_LABELS[m.employmentStatus]||m.employmentStatus},
];
const STAFF_PRESETS = [
  {name:'Default', keys:['employeeId','firstName','lastName','role','department','phone','employmentStatus']},
  {name:'All Fields', keys:STAFF_COLUMNS.map(c=>c.key)},
];

function getColumnsFor(entity){ return entity==='students' ? STUDENT_COLUMNS : STAFF_COLUMNS; }
function getPresetsFor(entity){ return entity==='students' ? STUDENT_PRESETS : STAFF_PRESETS; }
function getSavedColumnKeys(entity){
  try{
    const saved = JSON.parse(localStorage.getItem('conduct_columns_'+entity) || 'null');
    if(saved && saved.length) return saved;
  }catch(e){}
  return getPresetsFor(entity)[0].keys.slice();
}

function openColumnPicker(entity){
  const columns = getColumnsFor(entity);
  const presets = getPresetsFor(entity);
  const selected = new Set(getSavedColumnKeys(entity));
  const groups = [...new Set(columns.map(c=>c.group))];
  openModal(`
    <div class="modal-head"><h2 style="font-size:18px;">Print list — choose columns</h2><button onclick="closeModal()">&times;</button></div>
    <p style="font-size:12px;color:var(--ink-soft);margin:-6px 0 12px;">Pick a starting point, then check or uncheck anything. Your selection is remembered for next time.</p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px;">
      ${presets.map(p => `<button type="button" class="btn btn-secondary btn-sm" onclick="applyColumnPreset('${entity}','${escapeHtml(p.name)}')">${escapeHtml(p.name)}</button>`).join('')}
      <button type="button" class="btn btn-secondary btn-sm" onclick="setAllColumnChecks(true)">Select all</button>
      <button type="button" class="btn btn-secondary btn-sm" onclick="setAllColumnChecks(false)">Select none</button>
    </div>
    <div id="columnPickerList" style="max-height:340px;overflow:auto;border-top:1px solid var(--line);padding-top:8px;">
      ${groups.map(g => `
        <p style="font-size:11px;text-transform:uppercase;letter-spacing:.03em;color:var(--brand);margin:12px 0 6px;">${escapeHtml(g)}</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px 12px;">
          ${columns.filter(c=>c.group===g).map(c => `
            <label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:400;margin:0;">
              <input type="checkbox" value="${c.key}" ${selected.has(c.key)?'checked':''} style="width:auto;" />
              ${escapeHtml(c.label)}
            </label>`).join('')}
        </div>`).join('')}
    </div>
    <div class="modal-actions">
      <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button type="button" class="btn btn-primary" onclick="runColumnAction('${entity}')">Print list</button>
    </div>`);
}
function applyColumnPreset(entity, presetName){
  const preset = getPresetsFor(entity).find(p=>p.name===presetName);
  if(!preset) return;
  const keys = new Set(preset.keys);
  document.querySelectorAll('#columnPickerList input[type=checkbox]').forEach(cb => { cb.checked = keys.has(cb.value); });
}
function setAllColumnChecks(checked){
  document.querySelectorAll('#columnPickerList input[type=checkbox]').forEach(cb => { cb.checked = checked; });
}
function runColumnAction(entity){
  const checked = [...document.querySelectorAll('#columnPickerList input[type=checkbox]:checked')].map(cb=>cb.value);
  if(checked.length === 0){ alert('Select at least one column.'); return; }
  localStorage.setItem('conduct_columns_'+entity, JSON.stringify(checked));
  const columns = getColumnsFor(entity).filter(c => checked.includes(c.key));
  closeModal();
  if(entity==='students') generateStudentsPrint(columns);
  else generateStaffPrint(columns);
}

function printStudents(){ openColumnPicker('students'); }
function printStaff(){ openColumnPicker('staff'); }

function csvEscape(val){
  val = val==null ? '' : String(val);
  return /[",\n\r]/.test(val) ? '"' + val.replace(/"/g,'""') + '"' : val;
}
function downloadCSV(columns, rows, filename){
  const header = columns.map(c=>csvEscape(c.label)).join(',');
  const lines = rows.map(r => columns.map(c => csvEscape(c.get(r))).join(','));
  const csv = '\uFEFF' + [header, ...lines].join('\r\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}
function generatePrintList(title, columns, rows){
  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html><html><head><title>${escapeHtml(title)}</title>
  <style>
    body{font-family:Arial,Helvetica,sans-serif;color:#000;margin:20px;}
    h1{font-size:18px;margin:0 0 2px;text-align:center;}
    .sub{text-align:center;font-size:12px;margin:0 0 10px;color:#000;}
    .meta{font-size:11px;color:#000;margin-bottom:10px;display:flex;justify-content:space-between;}
    table{width:100%;border-collapse:collapse;font-size:11px;}
    th,td{border:1px solid #000;padding:5px 6px;text-align:left;background:#fff;color:#000;}
    th{font-weight:bold;}
    @media print{ body{margin:8mm;} }
  </style></head><body>
    <img src="${LOGO_DATA_URI}" alt="Bombay Kids International School" style="height:60px;display:block;margin:0 auto 6px;" />
    <p class="sub">${escapeHtml(SCHOOL_ADDRESS)}</p>
    <div class="meta"><span>${escapeHtml(title)}</span><span>Generated ${formatDate(todayIso())} · ${rows.length} record${rows.length===1?'':'s'}</span></div>
    <table>
      <thead><tr>${columns.map(c=>`<th>${escapeHtml(c.label)}</th>`).join('')}</tr></thead>
      <tbody>${rows.map(r => `<tr>${columns.map(c=>`<td>${escapeHtml(c.get(r))}</td>`).join('')}</tr>`).join('')}</tbody>
    </table>
    <script>window.onload = () => window.print();<\/script>
  </body></html>`);
  win.document.close();
}
function generateStudentsPrint(columns){ generatePrintList('Student Roster', columns, getFilteredStudents()); }
function generateStaffPrint(columns){ generatePrintList('Staff Roster', columns, staffList); }

/* ---------------- user access (admin only) ---------------- */
function renderUserManagement(topbar, content){
  topbar.innerHTML = `
    <div><h1>User Access</h1><p>Control who can sign in, what they can see, and what they can edit.</p></div>
    <button class="btn btn-primary" onclick="openUserModal()">+ Add user</button>`;

  content.innerHTML = `
    <div class="table-wrap"><table>
      <thead><tr><th>Name</th><th>Username</th><th>Role</th><th>Can view</th><th>Can edit</th><th>Status</th><th></th></tr></thead>
      <tbody>
        ${users.map(u => `
          <tr>
            <td style="font-weight:500;">${escapeHtml(u.name)}</td>
            <td><span class="record-tag">${escapeHtml(u.username)}</span></td>
            <td>${escapeHtml(ROLE_LABELS[u.role]||u.role)}</td>
            <td style="font-size:12px;color:var(--ink-soft);max-width:220px;">${VIEW_PERMISSION_KEYS.filter(k=>u.permissions.view[k]).map(k=>VIEW_PERMISSION_LABELS[k].split(' (')[0]).join(', ') || '—'}</td>
            <td style="font-size:12px;color:var(--ink-soft);max-width:220px;">${u.role==='admin' ? 'Everything' : (EDIT_PERMISSION_KEYS.filter(k=>u.permissions.edit[k]).map(k=>EDIT_PERMISSION_LABELS[k]).join(', ') || '—')}</td>
            <td>${u.status==='active' ? '<span class="pill pill-good">Active</span>' : '<span class="pill pill-neutral">Inactive</span>'}</td>
            <td style="text-align:right;white-space:nowrap;">
              <button class="btn btn-secondary btn-sm" onclick="openUserModal('${u.id}')">Edit</button>
              <button class="btn btn-secondary btn-sm" onclick="toggleUserStatus('${u.id}')">${u.status==='active'?'Deactivate':'Activate'}</button>
              <button class="btn btn-danger btn-sm" onclick="deleteUser('${u.id}')">Delete</button>
            </td>
          </tr>`).join('')}
      </tbody>
    </table></div>

    <div class="card" style="margin-top:24px;border-color:var(--bad);">
      <h2 style="font-size:16px;color:var(--bad);">Danger Zone</h2>
      <p style="font-size:13px;color:var(--ink-soft);margin:6px 0 14px;">Wipe data to clear test/dummy entries or reset before go-live. This cannot be undone — use "Export backup" in the sidebar first if you want a safety copy.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px 16px;margin-bottom:16px;">
        <label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:400;margin:0;"><input type="checkbox" id="resetStudents" style="width:auto;" /> Students</label>
        <label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:400;margin:0;"><input type="checkbox" id="resetEnquiries" style="width:auto;" /> Enquiries</label>
        <label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:400;margin:0;"><input type="checkbox" id="resetStaff" style="width:auto;" /> Staff (Teachers)</label>
        <label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:400;margin:0;"><input type="checkbox" id="resetTimetable" style="width:auto;" /> Time Table</label>
        <label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:400;margin:0;"><input type="checkbox" id="resetFees" style="width:auto;" /> Fees</label>
        <label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:400;margin:0;"><input type="checkbox" id="resetSalaries" style="width:auto;" /> Salaries</label>
        <label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:400;margin:0;"><input type="checkbox" id="resetAttendance" style="width:auto;" /> Attendance (student + staff)</label>
      </div>
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <input type="text" id="resetConfirmInput" placeholder="Type RESET to confirm" style="max-width:200px;" oninput="document.getElementById('resetConfirmBtn').disabled = this.value.trim().toUpperCase()!=='RESET';" />
        <button id="resetConfirmBtn" class="btn btn-danger" disabled onclick="runDangerZoneReset()">Clear Selected Data</button>
      </div>
      <div id="resetResultMsg" style="margin-top:10px;font-size:13px;"></div>
    </div>`;
}
function runDangerZoneReset(){
  const categories = [];
  if(document.getElementById('resetStudents').checked){ students = []; categories.push('Students'); }
  if(document.getElementById('resetEnquiries').checked){ enquiries = []; categories.push('Enquiries'); }
  if(document.getElementById('resetStaff').checked){ staffList = []; categories.push('Staff'); }
  if(document.getElementById('resetTimetable').checked){ timeTableData = {periods:[], cells:{}}; categories.push('Time Table'); }
  if(document.getElementById('resetFees').checked){ fees = []; categories.push('Fees'); }
  if(document.getElementById('resetSalaries').checked){ salaries = []; categories.push('Salaries'); }
  if(document.getElementById('resetAttendance').checked){ studentAttendance = []; staffAttendance = []; attendanceRecords = []; categories.push('Attendance'); }

  if(categories.length === 0){ alert('Select at least one category to clear.'); return; }
  if(!confirm('This will permanently delete: ' + categories.join(', ') + '. This cannot be undone. Continue?')) return;

  saveAll();
  document.getElementById('resetConfirmInput').value = '';
  document.getElementById('resetConfirmBtn').disabled = true;
  ['resetStudents','resetEnquiries','resetStaff','resetTimetable','resetFees','resetSalaries','resetAttendance'].forEach(id => {
    document.getElementById(id).checked = false;
  });
  document.getElementById('resetResultMsg').innerHTML = `<span style="color:var(--good);font-weight:600;">Cleared: ${escapeHtml(categories.join(', '))}.</span>`;
}
function applyRolePreset(role){
  const preset = ROLE_PRESETS[role] || ROLE_PRESETS.custom;
  VIEW_PERMISSION_KEYS.forEach(key => {
    const cb = document.querySelector('#userViewPermList input[value="'+key+'"]');
    if(cb) cb.checked = !!preset.view[key];
  });
  EDIT_PERMISSION_KEYS.forEach(key => {
    const cb = document.querySelector('#userEditPermList input[value="'+key+'"]');
    if(cb) cb.checked = !!preset.edit[key];
  });
}
function openUserModal(existingId){
  const u = existingId ? users.find(x=>x.id===existingId) : null;
  const role = u ? u.role : 'office';
  const perms = u ? u.permissions : ROLE_PRESETS[role];
  openModal(`
    <div class="modal-head"><h2 style="font-size:18px;">${u?'Edit user':'Add user'}</h2><button onclick="closeModal()">&times;</button></div>
    <form id="userForm">
      <div class="form-grid">
        <div class="field"><label>Full name</label><input name="name" value="${escapeHtml(u?.name)}" required /></div>
        <div class="field"><label>Username</label><input name="username" value="${escapeHtml(u?.username)}" required /></div>
        <div class="field"><label>Password${u?' (leave blank to keep current)':''}</label><input type="password" name="password" ${u?'':'required'} /></div>
        <div class="field"><label>Role</label>
          <select name="role" onchange="applyRolePreset(this.value)">
            ${Object.keys(ROLE_LABELS).map(r=>`<option value="${r}" ${role===r?'selected':''}>${ROLE_LABELS[r]}</option>`).join('')}
          </select>
        </div>
        ${u ? `<div class="field"><label>Status</label><select name="status"><option value="active" ${u.status==='active'?'selected':''}>Active</option><option value="inactive" ${u.status==='inactive'?'selected':''}>Inactive</option></select></div>` : ''}
      </div>
      <div style="margin-top:14px;">
        <p style="font-size:12px;font-weight:500;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.03em;margin:0 0 8px;">Can view</p>
        <div id="userViewPermList" style="display:grid;grid-template-columns:1fr 1fr;gap:7px 12px;">
          ${VIEW_PERMISSION_KEYS.map(key => `
            <label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:400;margin:0;">
              <input type="checkbox" value="${key}" ${perms.view[key]?'checked':''} style="width:auto;" />
              ${escapeHtml(VIEW_PERMISSION_LABELS[key])}
            </label>`).join('')}
        </div>
        <p style="font-size:11px;color:var(--bad);margin-top:8px;">Salary is visible only to whoever you check it for here — by default that's Admin and Board of Directors.</p>
      </div>
      <div style="margin-top:16px;">
        <p style="font-size:12px;font-weight:500;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.03em;margin:0 0 8px;">Can edit (add / change / delete records)</p>
        <div id="userEditPermList" style="display:grid;grid-template-columns:1fr 1fr;gap:7px 12px;">
          ${EDIT_PERMISSION_KEYS.map(key => `
            <label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:400;margin:0;">
              <input type="checkbox" value="${key}" ${perms.edit[key]?'checked':''} style="width:auto;" />
              ${escapeHtml(EDIT_PERMISSION_LABELS[key])}
            </label>`).join('')}
        </div>
        <p style="font-size:11px;color:var(--ink-soft);margin-top:8px;">Editing is closed for everyone but Admin by default — someone can view a section without being able to change anything in it until you tick it here.</p>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">${u?'Save changes':'Add user'}</button>
      </div>
    </form>`);
  document.getElementById('userForm').addEventListener('submit', function(e){
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.target).entries());
    const usernameLower = fd.username.trim().toLowerCase();
    const clash = users.find(x => x.username.toLowerCase()===usernameLower && x.id !== (u?u.id:null));
    if(clash){ alert('That username is already taken.'); return; }
    const view = {};
    VIEW_PERMISSION_KEYS.forEach(key => {
      const cb = document.querySelector('#userViewPermList input[value="'+key+'"]');
      view[key] = !!(cb && cb.checked);
    });
    const edit = {};
    EDIT_PERMISSION_KEYS.forEach(key => {
      const cb = document.querySelector('#userEditPermList input[value="'+key+'"]');
      edit[key] = !!(cb && cb.checked);
    });
    const permissions = { view, edit };
    if(u){
      u.name = fd.name; u.username = fd.username.trim(); u.role = fd.role; u.permissions = permissions;
      if(fd.status) u.status = fd.status;
      if(fd.password) u.password = fd.password;
    } else {
      users.push({
        id: uid('usr'), name: fd.name, username: fd.username.trim(), password: fd.password,
        role: fd.role, permissions, status: 'active', createdAt: todayIso(),
      });
    }
    saveAll();
    closeModal();
    renderUserManagement(document.getElementById('topbar'), document.getElementById('content'));
  });
}
function countActiveAdmins(excludeId){
  return users.filter(u => u.role==='admin' && u.status==='active' && u.id!==excludeId).length;
}
function toggleUserStatus(id){
  const u = users.find(x=>x.id===id);
  if(!u) return;
  if(u.role==='admin' && u.status==='active' && countActiveAdmins(id)===0){
    alert("Can't deactivate the last active admin account.");
    return;
  }
  u.status = u.status==='active' ? 'inactive' : 'active';
  saveAll();
  renderUserManagement(document.getElementById('topbar'), document.getElementById('content'));
}
function deleteUser(id){
  const u = users.find(x=>x.id===id);
  if(!u) return;
  if(u.role==='admin' && u.status==='active' && countActiveAdmins(id)===0){
    alert("Can't delete the last active admin account.");
    return;
  }
  if(!confirm('Delete this user account? They will no longer be able to sign in.')) return;
  users = users.filter(x=>x.id!==id);
  saveAll();
  renderUserManagement(document.getElementById('topbar'), document.getElementById('content'));
}

/* ---------------- modal shell ---------------- */
function openModal(html){
  document.getElementById('modalRoot').innerHTML = `<div class="modal-backdrop" onclick="if(event.target===this)closeModal()"><div class="modal">${html}</div></div>`;
}
function openModalWide(html){
  document.getElementById('modalRoot').innerHTML = `<div class="modal-backdrop" onclick="if(event.target===this)closeModal()"><div class="modal modal-wide">${html}</div></div>`;
}
function closeModal(){
  document.getElementById('modalRoot').innerHTML = '';
  pendingConversion = null;
}

/* ---------------- backup ---------------- */
function exportBackup(){
  const blob = new Blob([JSON.stringify({students, enquiries, staff:staffList, fees, salaries, exportedAt:new Date().toISOString()}, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'conduct-backup-' + todayIso() + '.json';
  a.click();
}
function importBackup(event){
  const file = event.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(){
    try{
      const data = JSON.parse(reader.result);
      if(!confirm('This replaces all current data in this browser with the backup file. Continue?')) return;
      students = data.students || [];
      enquiries = data.enquiries || [];
      staffList = data.staff || [];
      fees = data.fees || [];
      salaries = data.salaries || [];
      saveAll();
      renderApp();
    }catch(err){
      alert('Could not read that file — make sure it is a Conduct backup JSON.');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

/* ---------------- global auto-capitalization ----------------
   Forces every free-text input/textarea to store CAPITAL LETTERS,
   both as the user types and therefore whatever gets saved.
   Select dropdowns, dates, numbers, and the passcode field are
   untouched — those hold fixed values, not free text. */
document.addEventListener('input', function(e){
  const el = e.target;
  const isFreeText = el.tagName === 'TEXTAREA' || (el.tagName === 'INPUT' && (el.type === 'text' || !el.getAttribute('type')));
  if(!isFreeText) return;
  const start = el.selectionStart;
  let value = el.value;

  const restrict = el.getAttribute('data-restrict');
  if(restrict){
    const parts = restrict.split(':');
    const kind = parts[0], maxLen = parts[1] ? parseInt(parts[1],10) : null;
    if(kind === 'digits') value = value.replace(/[^0-9]/g, '');
    else if(kind === 'letters') value = value.replace(/[^a-zA-Z ]/g, '');
    if(maxLen) value = value.slice(0, maxLen);
  }

  const upper = value.toUpperCase();
  if(upper !== el.value){
    el.value = upper;
    if(typeof start === 'number'){
      const newPos = Math.min(start, el.value.length);
      el.setSelectionRange(newPos, newPos);
    }
  }
}, true);

/* ---------------- init ---------------- */
loadData();
seedUsersIfNeeded();
resetCoreDataIfNeeded();
importRoster202627IfNeeded();
migrateUserPermissionsIfNeeded();
backfillPermissionKeysIfNeeded();
checkSession();
