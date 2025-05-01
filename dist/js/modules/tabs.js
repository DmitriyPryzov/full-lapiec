export default function selectTab(tab, id) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    tabEl.classList.add('active');

    document.querySelectorAll('.shopping, .recipes, .spysannya').forEach(panel => {
      panel.classList.remove('active-panel');
    });

    document.getElementById(panelId).classList.add('active-panel');
  }