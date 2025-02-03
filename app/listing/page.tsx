"use client";

import React, { useState, useEffect } from 'react';
import TicketTable from '../components/TicketTable'; // Adjust path if needed
import axios from 'axios';

const TicketsPage = ({ email = 'user@example.com' }: { email?: string }) => {
  const [tickets, setTickets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        if (!email) {
          setError('❌ No email provided');
          setLoading(false);
          return;
        }
        const url = process.env.OSTICKET_URL;

        const osticketUrl = `${url}/api/http.php/tickets.json?email=${encodeURIComponent(email)}`;
        const apiKey = process.env.OSTICKET_API_KEY;

        if (!osticketUrl || !apiKey) {
          setError('❌ Missing osTicket API URL or API Key');
          setLoading(false);
          return;
        }

        const response = await axios.get(osticketUrl, {
          headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json',
          },
        });

        console.log(response);

        if (Array.isArray(response.data)) {
          setTickets(response.data);
        } else {
          setError('Failed to fetch tickets');
        }
      } catch (err) {
        setError('Error fetching tickets');
        console.error('Error fetching tickets:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [email]);

  if (loading) return <div>Loading tickets...</div>;

  return (
    <div>
      <h1>Ticket List</h1>
      {error ? (
        <div>{error}</div>
      ) : tickets.length === 0 ? (
        <div>No tickets found for the provided email.</div>
      ) : (
        <TicketTable tickets={tickets} />
      )}
    </div>
  );
};

export default TicketsPage;
