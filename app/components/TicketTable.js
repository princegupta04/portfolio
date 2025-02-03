// app/components/TicketTable.tsx
import React from 'react';

const TicketTable = ({ tickets }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Subject</th>
          <th>Topic</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Department</th>
          <th>Created</th>
          <th>Due</th>
          <th>User</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <tr key={ticket.id}>
            <td>{ticket.id}</td>
            <td>{ticket.subject}</td>
            <td>{ticket.topic.name}</td>
            <td>{ticket.status.name}</td>
            <td>{ticket.priority.name}</td>
            <td>{ticket.department}</td>
            <td>{ticket.timestamps.create}</td>
            <td>{ticket.timestamps.due}</td>
            <td>{ticket.user.fullname}</td>
            <td>{ticket.threads[0]?.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TicketTable;
