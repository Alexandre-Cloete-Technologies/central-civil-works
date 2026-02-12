import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Central Civil Works Pty Ltd';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  // Read the logo image from the filesystem
  let logoDataUrl: string | null = null;
  try {
    const logoBuffer = await readFile(join(process.cwd(), 'public', 'images', 'CCW_Logo.png'));
    // Convert Buffer to base64 data URL for use in img src
    logoDataUrl = `data:image/png;base64,${logoBuffer.toString('base64')}`;
    
  } catch (error) {
    console.error('Failed to load logo for OG image:', error);
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1f1f1f',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Grid */}
        <div
          style={{
            position: 'relative',
            inset: 0,
            backgroundImage: 'linear-gradient(#fed107  4px, transparent 4px), linear-gradient(90deg, #fed107 4px, transparent 4px)',
            backgroundSize: '40px 40px',
            opacity: 0.5,
          }}
        />

        {/* Radial Glow */}
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(254, 209, 7, 0.35) 0%, transparent 70%)',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Logo Container */}
        <div
          style={{
            zIndex: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {logoDataUrl ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={logoDataUrl}
              alt="Logo"
              style={{
                width: '600px',
                height: '400px',
                objectFit: 'contain',
              }}
            />
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 64, fontWeight: '900' }}>
              CENTRAL CIVIL<span style={{ color: '#fed107', marginLeft: 16 }}> WORKS </span>
            </div>
            
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 64, fontWeight: '900' }}>
              CENTRAL CIVIL<span style={{ color: '#fed107', marginLeft: 16 }}> WORKS </span>
            </div>
          )}
        </div>

        {/* Construction Stripes */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '32px',
            display: 'flex',
            overflow: 'hidden',
          }}
        >
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: '100%',
                backgroundColor: i % 2 === 0 ? '#fed107' : 'transparent',
                transform: 'skewX(-45deg) scale(1.5)',
              }}
            />
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
