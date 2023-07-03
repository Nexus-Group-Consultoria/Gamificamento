const IP = 'http://localhost:3000';

async function getUserData() {
    const token = localStorage.getItem('token');
    if (!token) {
      document.getElementById('username').textContent = "Nenhum";
      return
    }

    try {
      const token = localStorage.getItem('token');

      const response = await fetch(`${IP}/user`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const data = await response.json();

      if (response.status === 200) {  
        const username = data.user.username;
      }

      if (response.status === 403) {  
        localStorage.removeItem('token');
      }

    } catch (error) {
      console.error('Erro ao obter nome de usuário:', error);
    }
}

async function loadUpcomingTasks() {
    const token = localStorage.getItem('token');
    // const response = await fetch('http://localhost:3000/tasks/upcoming', {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // });
  
    // if (response.ok) {
      // const data = await response.json();
      // const upcomingTasks = data.tasks.map((task) => ({
      //   title: task.description,
      //   start: task.deadline,
      //   color: 'red'
      // }));
  
      var calendarEl = document.querySelector('.calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridWeek',
          locale: 'pt-BR',
          buttonText: {
            today: "Hoje",
            month: "Mês",
            week: "Semana",
            day: "Dia"
          }
        //   themeSystem: 'bootstrap5',
          // events: upcomingTasks,
          // eventClick: function (event) {
          //   openTaskModal(event);
          // }
          });
      calendar.render();
  
    // } else {
    //   const data = await response.json();
    //   alert(`Erro ao carregar as tarefas próximas de expirar: ${data.message}`);
    // }
}

async function logout() {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
}

$(".logout").on( "click", logout);
loadUpcomingTasks()