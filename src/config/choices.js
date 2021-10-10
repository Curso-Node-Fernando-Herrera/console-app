const VALUE_HOME = {
  NEW_TASK: 'new_task',
  LIST_TASK: 'list_task',
  LIST_COMPLETED_TASK: 'list_completed_task',
  LIST_PENDING_TASK: 'list_pending_task',
  COMPLETE_TASKS: 'complete_tasks',
  DELETE_TASK: 'delete_task',
  GET_OUT: 'get_out',
}

const HOME_CHOICES = [
  {
    name: '1. Crear tarea',
    value: VALUE_HOME.NEW_TASK,
  },
  {
    name: '2. Listar tareas',
    value: VALUE_HOME.LIST_TASK,
  },
  {
    name: '3. Listar tareas completadas',
    value: VALUE_HOME.LIST_COMPLETED_TASK,
  },
  {
    name: '4. Listar tareas pendientes',
    value: VALUE_HOME.LIST_PENDING_TASK,
  },
  {
    name: '5. Completar tarea(s)',
    value: VALUE_HOME.COMPLETE_TASKS,
  },
  {
    name: '6. Borrar tarea',
    value: VALUE_HOME.DELETE_TASK,
  },
  {
    name: '0. Salir',
    value: VALUE_HOME.GET_OUT,
  },
]

module.exports = {
  HOME_CHOICES,
  VALUE_HOME,
}
