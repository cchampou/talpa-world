import React, { ChangeEvent, useState } from 'react';
import { Input } from 'baseui/input';

function UnixConvert() {
  const [unix, setUnix] = useState<string>(
    Math.ceil(new Date().getTime() / 1000).toString(10)
  );
  return (
    <div>
      <Input
        type="text"
        value={unix}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setUnix(e.target.value)}
      />
      {new Date(parseInt(unix, 10) * 1000).toLocaleString()}
    </div>
  );
}

export default UnixConvert;
