import React from 'react';

export function AnimatedBackground() {
  return (
    <div className="animated-background">
      <div className="animated-box" style={{
        width: '400px',
        height: '400px',
        left: '10%',
        top: '20%',
        animationDelay: '0s',
        background: 'linear-gradient(135deg, rgba(255, 62, 0, 0.03), rgba(255, 140, 0, 0.03))'
      }} />
      <div className="animated-box" style={{
        width: '300px',
        height: '300px',
        right: '15%',
        top: '10%',
        animationDelay: '-5s',
        background: 'linear-gradient(225deg, rgba(255, 62, 0, 0.02), rgba(255, 140, 0, 0.02))'
      }} />
      <div className="animated-box" style={{
        width: '350px',
        height: '350px',
        left: '20%',
        bottom: '15%',
        animationDelay: '-10s',
        background: 'linear-gradient(45deg, rgba(255, 62, 0, 0.03), rgba(255, 140, 0, 0.03))'
      }} />
      <div className="animated-box" style={{
        width: '250px',
        height: '250px',
        right: '20%',
        bottom: '20%',
        animationDelay: '-15s',
        background: 'linear-gradient(315deg, rgba(255, 62, 0, 0.02), rgba(255, 140, 0, 0.02))'
      }} />
      <div className="animated-box" style={{
        width: '200px',
        height: '200px',
        left: '40%',
        top: '40%',
        animationDelay: '-7s',
        background: 'linear-gradient(135deg, rgba(255, 62, 0, 0.02), rgba(255, 140, 0, 0.02))'
      }} />
    </div>
  );
}