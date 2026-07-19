import React from 'react';

type Tool = {
  name: string;
  href: string;
  job: string;
  pricing: string;
  bestFor: string;
};

type ToolGroup = {
  title: string;
  description: string;
  tools: Tool[];
};

// TODO(owner): confirm current product availability, links, and pricing before publishing.
const toolGroups: ToolGroup[] = [
  {
    title: 'Reasoning & strategy',
    description: 'Use these when the work starts with framing a problem, exploring options, or making a decision.',
    tools: [
      {
        name: 'ChatGPT',
        href: 'https://chatgpt.com/',
        job: 'Think through ambiguous questions, draft plans, and turn rough ideas into working briefs.',
        pricing: 'Free tier / paid plans',
        bestFor: 'General strategy and structured thinking',
      },
      {
        name: 'Claude',
        href: 'https://claude.ai/',
        job: 'Work through long-form analysis and refine complex writing with a conversational partner.',
        pricing: 'Free tier / paid plans',
        bestFor: 'Careful analysis and synthesis',
      },
      {
        name: 'Gemini',
        href: 'https://gemini.google.com/',
        job: 'Explore ideas and summarize material while working across Google’s productivity ecosystem.',
        pricing: 'Free tier / paid plans',
        bestFor: 'Teams already working in Google Workspace',
      },
    ],
  },
  {
    title: 'Coding agents',
    description: 'Choose an agent that can understand a repository, make changes, and help you verify the result.',
    tools: [
      {
        name: 'Cursor',
        href: 'https://cursor.com/',
        job: 'Edit and navigate a codebase with an AI coding agent inside a familiar development environment.',
        pricing: 'Free tier / paid plans',
        bestFor: 'Individual developers and small product teams',
      },
      {
        name: 'GitHub Copilot',
        href: 'https://github.com/features/copilot',
        job: 'Suggest code, explain unfamiliar files, and assist with changes from inside supported editors and GitHub.',
        pricing: 'Paid plans / organization plans',
        bestFor: 'Teams already centered on GitHub',
      },
      {
        name: 'Claude Code',
        href: 'https://www.anthropic.com/claude-code',
        job: 'Delegate repository tasks from the terminal while keeping review and approval in the developer’s hands.',
        pricing: 'Plan-dependent',
        bestFor: 'Terminal-first engineering workflows',
      },
    ],
  },
  {
    title: 'Writing & marketing',
    description: 'Use AI to move from a blank page to an editable draft, then keep human judgment in the loop.',
    tools: [
      {
        name: 'Grammarly',
        href: 'https://www.grammarly.com/ai-writing-assistant',
        job: 'Improve clarity, tone, and correctness across everyday professional writing.',
        pricing: 'Free tier / paid plans',
        bestFor: 'Editing and communication quality',
      },
      {
        name: 'Jasper',
        href: 'https://www.jasper.ai/',
        job: 'Create and adapt campaign drafts while keeping messaging consistent across channels.',
        pricing: 'Paid plans / trial availability varies',
        bestFor: 'Marketing teams with repeatable brand workflows',
      },
    ],
  },
  {
    title: 'Search & RAG',
    description: 'Start with evidence: these tools help you find, question, and organize information before acting on it.',
    tools: [
      {
        name: 'Perplexity',
        href: 'https://www.perplexity.ai/',
        job: 'Research a question with concise answers and links that make source checking easier.',
        pricing: 'Free tier / paid plans',
        bestFor: 'Fast, source-aware web research',
      },
      {
        name: 'NotebookLM',
        href: 'https://notebooklm.google.com/',
        job: 'Ask questions of your own documents and build a grounded briefing from supplied sources.',
        pricing: 'Free access / account-dependent features',
        bestFor: 'Document-based research and learning',
      },
    ],
  },
  {
    title: 'Automation & agents',
    description: 'Connect systems and delegate bounded, repeatable work with clear permissions and review points.',
    tools: [
      {
        name: 'Zapier',
        href: 'https://zapier.com/ai',
        job: 'Connect business apps and turn natural-language ideas into repeatable workflows.',
        pricing: 'Free tier / paid plans',
        bestFor: 'No-code cross-app automation',
      },
      {
        name: 'Make',
        href: 'https://www.make.com/en/ai-automation',
        job: 'Design visual, multi-step automations with branching logic and data transformations.',
        pricing: 'Free tier / paid plans',
        bestFor: 'Flexible visual workflow design',
      },
      {
        name: 'n8n',
        href: 'https://n8n.io/',
        job: 'Build composable workflows that combine APIs, services, and agent steps with more deployment control.',
        pricing: 'Self-hosted option / paid cloud plans',
        bestFor: 'Technical teams that want control of their automation stack',
      },
    ],
  },
  {
    title: 'Voice & meeting',
    description: 'Reduce the cost of conversations by capturing decisions, producing drafts, and making audio searchable.',
    tools: [
      {
        name: 'Otter.ai',
        href: 'https://otter.ai/',
        job: 'Transcribe meetings and turn conversations into searchable notes and action items.',
        pricing: 'Free tier / paid plans',
        bestFor: 'Meeting notes and team follow-up',
      },
      {
        name: 'ElevenLabs',
        href: 'https://elevenlabs.io/',
        job: 'Create natural-sounding voiceovers and audio experiences from written scripts.',
        pricing: 'Free tier / paid plans',
        bestFor: 'Narration, localization, and voice prototypes',
      },
    ],
  },
  {
    title: 'Image & video',
    description: 'Prototype visual directions quickly, while retaining human review for rights, quality, and brand fit.',
    tools: [
      {
        name: 'Adobe Firefly',
        href: 'https://firefly.adobe.com/',
        job: 'Generate and edit images and design elements inside a familiar creative workflow.',
        pricing: 'Free access / paid plans',
        bestFor: 'Creative teams using Adobe tools',
      },
      {
        name: 'Canva AI',
        href: 'https://www.canva.com/ai-image-generator/',
        job: 'Turn a brief into editable social, presentation, and campaign visuals.',
        pricing: 'Free tier / paid plans',
        bestFor: 'Fast, template-led visual communication',
      },
      {
        name: 'Runway',
        href: 'https://runwayml.com/',
        job: 'Prototype and edit short-form video from text, images, and existing footage.',
        pricing: 'Free tier / paid plans',
        bestFor: 'Video concepts and production experiments',
      },
    ],
  },
];

const AiToolsPage: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Recommended AI Tools
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          A practical shortlist organized around jobs to be done—not hype. Start with the problem, choose one or two tools to test, and review the workflow before adding another subscription.
        </p>
        <p className="text-sm text-gray-500 mb-10">Last reviewed: July 18, 2026</p>

        <div className="space-y-12">
          {toolGroups.map((group) => (
            <section key={group.title} aria-labelledby={group.title.replace(/\s+/g, '-').toLowerCase()}>
              <h2 id={group.title.replace(/\s+/g, '-').toLowerCase()} className="text-2xl font-bold text-gray-800 mb-2">
                {group.title}
              </h2>
              <p className="text-gray-600 mb-5">{group.description}</p>
              <ul className="grid gap-5 md:grid-cols-2">
                {group.tools.map((tool) => (
                  <li key={tool.name} className="border border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
                    <a href={tool.href} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:underline">
                      {tool.name}
                    </a>
                    <p className="text-gray-700 mt-2">{tool.job}</p>
                    <dl className="mt-4 space-y-1 text-sm">
                      <div className="flex gap-2">
                        <dt className="font-semibold text-gray-500">Pricing:</dt>
                        <dd className="text-gray-600">{tool.pricing}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="font-semibold text-gray-500">Best for:</dt>
                        <dd className="text-gray-600">{tool.bestFor}</dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiToolsPage;
