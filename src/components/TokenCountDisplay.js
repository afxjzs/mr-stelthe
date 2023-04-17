// src/components/TokenCountDisplay.js

import React from 'react';

const TokenCountDisplay = ({ tokenCount, modelName, fullResponse }) => {
  return (
		<div	className='mx-auto max-w-lg rounded-lg border m-4'>
						<h3 className='p-4 font-bold text-center'>Debugging</h3>

    <div className='flex flex-col gap-4 p-4 md:p-8'>
			<table>
				<tbody>
				<tr>
					<td className='text-right font-bold'>Tokens:</td>
					<td className='font-mono'>{tokenCount}</td>
				</tr>
				<tr>
					<td className='text-right font-bold'>Model:</td>
					<td className='font-mono'>{modelName}</td>
				</tr>
				</tbody>
			</table>

      <pre className='bg-gray-50 p-4 overflow-scroll'>{JSON.stringify(fullResponse, null, 2)}</pre>
    </div>
		</div>
  );
};

export default TokenCountDisplay;