import React from 'react'

const Agents = ({ agents }) => {
  return (
    <div>
      <center><h2>Agent List</h2></center>
       { agents.map((agent) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{agent.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{agent.type}</h6>
            <p class="card-text"><a href={'/'+ agent.name + '/plans'}>Registered Plans</a></p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Agents