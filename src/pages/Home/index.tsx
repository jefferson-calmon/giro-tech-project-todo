import React, { FormEvent, useState } from 'react';

import { createRipple } from '../../utils/createRipple';
import { handleActive } from '../../utils/handleActive';

import { Container } from './styles';

import ImageBg from '../../assets/bg-image-3.jpg';
import IllustrationNotTaskToDo from '../../assets/not-task-to-do.svg';
import IllustrationNotTaskComplete from '../../assets/not-task-complete.svg';

interface Task {
    id: number,
    task: string;
    isComplete: boolean;
}

function Home() {

    const [ tasks, setTasks ] = useState<Task[]>([]);

    function handleTasksArea(event: React.MouseEvent<HTMLDivElement, MouseEvent>, button: string, area: string) {
        createRipple(event)

        const areas = document.querySelectorAll('.tasks-screen');
        const buttons = document.querySelectorAll('.header-tasks-area');

        Array.from(buttons).forEach(tasksButton => tasksButton.classList.remove('active'));
        handleActive(`.${button}`);

        Array.from(areas).forEach(areaTasks => areaTasks.classList.remove('active'));
        handleActive(`.${area}`);
    }

    function handleAddTask(event: FormEvent) {
        event.preventDefault();

        const input = event.currentTarget.querySelector('input');

        if (!input) return;

        const taskName = input.value;
        input.value = '';
        input.focus();

        const task = {
            id: Date.now(),
            task: taskName,
            isComplete: false
        }

        setTasks([task, ...tasks]);
    }

    function handleStateTask(taskId: number) {
        const newArrayTasks = tasks.map(task => task.id === taskId ? { ...task, isComplete: !task.isComplete } : task);

        setTimeout(() => setTasks(newArrayTasks), 300);
    }

    function handleRemoveTask(taskId: number) {
        const newArrayTasks = tasks.filter(task => taskId !== task.id);

        setTasks(newArrayTasks);
    }

    return (
        <Container id="to-do">
            <div className="bg-images">
                <img src={ImageBg} alt="Background To Do | Giro.Tech" />
            </div>

            <div className="dev-credits">
                by <strong>Jefferson Calmon</strong>
            </div>

            {/* <div id="theme">
                <i className="far fa-theme"></i>

                <div className="box-themes">
                    <div className="theme"></div>
                    <div className="theme"></div>
                    <div className="theme"></div>
                </div>
            </div> */}

            <div className="content">
                <div className="to-do">
                    <h1>To Do List</h1>

                    <form className="add-task" onSubmit={(event) => handleAddTask(event)}>
                        <input type="text" placeholder="Digite aqui" required />

                        <button type="submit">
                            <i className="far fa-plus"></i>
                        </button>
                    </form>

                    <div className="tasks">
                        <header>
                            <div className="header-tasks-area in-progress active" onClick={(event) => handleTasksArea(event, 'in-progress', 'screen-in-progress')}>
                                <span>Pendentes</span>
                            </div>
                            <div className="header-tasks-area complete" onClick={(event) => handleTasksArea(event, 'complete', 'screen-complete')}>
                                <span>Concluídas</span>
                            </div>
                        </header>

                        <div id="tasks-wrapper">
                            <div className="tasks-screen screen-in-progress active">
                                {
                                    tasks.map(task => !task.isComplete && (
                                            <div className="task" key={task.id}>
                                                <div>
                                                    <div className="checkbox">
                                                        <input id={task.id.toString()} type="checkbox" onChange={() => handleStateTask(task.id)}/>
                                                        <label className="cbx" htmlFor={task.id.toString()}>
                                                        <div className="flip">
                                                            <div className="front"></div>
                                                            <div className="back">
                                                            <svg width="16" height="14" viewBox="0 0 16 14">
                                                                <path d="M2 8.5L6 12.5L14 1.5"></path>
                                                            </svg>
                                                            </div>
                                                        </div>
                                                        </label>
                                                    </div>
    
                                                    <strong>{task.task}</strong>
                                                </div>

                                                <div className="actions">
                                                    <button onClick={() => handleRemoveTask(task.id)}>
                                                        <i className="far fa-trash-alt"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    )
                                }

                                {
                                    (tasks.length === 0 || tasks.every(task => task.isComplete)) && (
                                        <div className="not-tasks">
                                            <img src={IllustrationNotTaskToDo} alt="not tasks to do"/>
                                            <h2>Você não tem <br/> tarefas pendentes.</h2>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="tasks-screen screen-complete">
                                {
                                    tasks.map(task => task.isComplete && (
                                            <div className="task" key={task.id}>
                                                <div>
                                                    <div className="checkbox">
                                                        <input id={task.id.toString()} type="checkbox" onChange={() => handleStateTask(task.id)} checked/>
                                                        <label className="cbx" htmlFor={task.id.toString()}>
                                                        <div className="flip">
                                                            <div className="front"></div>
                                                            <div className="back">
                                                            <svg width="16" height="14" viewBox="0 0 16 14">
                                                                <path d="M2 8.5L6 12.5L14 1.5"></path>
                                                            </svg>
                                                            </div>
                                                        </div>
                                                        </label>
                                                    </div>
    
                                                    <strong>{task.task}</strong>
                                                </div>

                                                <div className="actions">
                                                    <button onClick={() => handleRemoveTask(task.id)}>
                                                        <i className="far fa-trash-alt"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    )
                                }

                                {
                                    (tasks.length === 0 || tasks.every(task => !task.isComplete)) && (
                                        <div className="not-tasks">
                                        <img src={IllustrationNotTaskComplete} alt="not tasks to do"/>
                                            <h2>Você não tem <br/> tarefas completas.</h2>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Home;
