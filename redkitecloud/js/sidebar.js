/**
 * RedKiteCloud — sidebar.js
 * Single source of truth for ALL modules and topics.
 * Matches live site structure exactly.
 */

const RKC_MODULES = [
  {
    id: 'azure-fundamentals',
    label: '☁️ Azure Fundamentals',
    exam: 'AZ-900',
    topics: [
      { title: 'What is Cloud Computing?',          file: 'what-is-cloud-computing.html',    done: true  },
      { title: 'IaaS vs PaaS vs SaaS',              file: 'iaas-paas-saas.html',             done: true  },
      { title: 'Public vs Private vs Hybrid',       file: 'cloud-types.html',                done: true  },
      { title: 'What is Microsoft Azure?',           file: 'what-is-azure.html',              done: true  },
      { title: 'Azure Global Infrastructure',        file: 'global-infrastructure.html',      done: true  },
      { title: 'Azure Regions & Availability Zones', file: 'regions-availability-zones.html', done: true  },
      { title: 'Azure Region Pairs',                 file: 'region-pairs.html',               done: true  },
      { title: 'Azure Portal Walkthrough',           file: 'azure-portal.html',               done: true  },
      { title: 'Azure CLI — Complete Guide',         file: 'azure-cli.html',                  done: true  },
      { title: 'Azure PowerShell',                   file: 'azure-powershell.html',           done: true  },
      { title: 'Azure Cloud Shell',                  file: 'cloud-shell.html',                done: true  },
      { title: 'Azure Pricing & Free Tier',          file: 'pricing.html',                    done: true  },
      { title: 'Azure Resource Groups',              file: 'resource-groups.html',            done: true  },
      { title: 'Azure Subscriptions',                file: 'subscriptions.html',              done: true  },
      { title: 'Azure Management Groups',            file: 'management-groups.html',          done: true  },
      { title: 'Azure Arc',                          file: 'azure-arc.html',                  done: true  },
    ]
  },
  {
    id: 'azure-virtual-machines',
    label: '🖥️ Azure Virtual Machines',
    exam: 'AZ-104',
    topics: [
      { title: 'Azure VMs Overview',               file: 'overview.html',                 done: true  },
      { title: 'VM Series & Sizes',                file: 'vm-sizes.html',                 done: true  },
      { title: 'Create a Windows VM',              file: 'create-windows-vm.html',        done: true  },
      { title: 'Create a Linux VM',                file: 'create-linux-vm.html',          done: true  },
      { title: 'Connect to VM via SSH',            file: 'connect-ssh.html',              done: true  },
      { title: 'Connect to VM via RDP',            file: 'connect-rdp.html',              done: true  },
      { title: 'VM Disks Explained',               file: 'vm-disks.html',                 done: true  },
      { title: 'Azure Managed Disks',              file: 'managed-disks.html',            done: true  },
      { title: 'Azure Bastion',                    file: 'bastion.html',                  done: true  },
      { title: 'Availability Sets & Zones',        file: 'availability-sets.html',        done: true  },
      { title: 'VM Scale Sets',                    file: 'vmss.html',                     done: true  },
      { title: 'Azure Spot VMs',                   file: 'spot-vms.html',                 done: true  },
      { title: 'VM Auto-shutdown',                 file: 'vm-autoshutdown.html',          done: true  },
      { title: 'VM Pricing & Cost Tips',           file: 'vm-pricing.html',               done: true  },
    ]
  },
  {
    id: 'azure-storage',
    label: '💾 Azure Storage',
    exam: 'AZ-104',
    topics: [
      { title: 'Azure Storage Overview',           file: 'storage-overview.html',         done: true },
      { title: 'Azure Blob Storage',               file: 'blob-storage.html',             done: true },
      { title: 'Blob Access Tiers',                file: 'blob-access-tiers.html',        done: true },
      { title: 'Blob Lifecycle Management',        file: 'lifecycle-management.html',     done: true },
      { title: 'Azure File Storage',               file: 'file-storage.html',             done: true },
      { title: 'Azure Queue Storage',              file: 'queue-storage.html',            done: true },
      { title: 'Azure Table Storage',              file: 'table-storage.html',            done: true },
      { title: 'Storage Redundancy — LRS/ZRS/GRS', file: 'storage-redundancy.html',      done: true },
      { title: 'Shared Access Signatures',         file: 'sas-tokens.html',               done: true },
      { title: 'Storage Account Security',         file: 'storage-security.html',         done: true },
      { title: 'Static Website Hosting',           file: 'static-website.html',           done: true },
      { title: 'Azure CDN with Storage',           file: 'cdn-storage.html',              done: true },
      { title: 'Azure Storage Explorer',           file: 'storage-explorer.html',         done: true },
      { title: 'Storage Pricing',                  file: 'storage-pricing.html',          done: true },
    ]
  },
  {
    id: 'azure-networking',
    label: '🌐 Azure Networking',
    exam: 'AZ-104',
    topics: [
      { title: 'Azure Networking Overview',        file: 'networking-overview.html',      done: true },
      { title: 'Virtual Networks (VNet)',           file: 'vnet.html',                     done: true },
      { title: 'Subnets & IP Addressing',          file: 'subnets.html',                  done: true },
      { title: 'Network Security Groups',          file: 'nsg.html',                      done: true },
      { title: 'Azure Load Balancer',              file: 'load-balancer.html',            done: true },
      { title: 'Azure Application Gateway',        file: 'application-gateway.html',      done: true },
      { title: 'Azure Front Door',                 file: 'front-door.html',               done: true },
      { title: 'Azure Traffic Manager',            file: 'traffic-manager.html',          done: true },
      { title: 'Azure VPN Gateway',                file: 'vpn-gateway.html',              done: true },
      { title: 'Azure ExpressRoute',               file: 'expressroute.html',             done: true },
      { title: 'VNet Peering',                     file: 'vnet-peering.html',             done: true },
      { title: 'Azure DNS',                        file: 'azure-dns.html',                done: true },
      { title: 'Azure Firewall',                   file: 'azure-firewall.html',           done: true },
      { title: 'Azure DDoS Protection',            file: 'ddos-protection.html',          done: true },
      { title: 'Azure Private Endpoints',          file: 'private-endpoints.html',        done: true },
      { title: 'Azure Network Watcher',            file: 'network-watcher.html',          done: true },
    ]
  },
  {
    id: 'azure-databases',
    label: '🗄️ Azure Databases',
    exam: 'AZ-104',
    topics: [
      { title: 'Choosing the Right Database',      file: 'choosing-database.html',        done: true },
      { title: 'Azure SQL Database',               file: 'azure-sql.html',                done: true },
      { title: 'Azure SQL Managed Instance',       file: 'sql-managed-instance.html',     done: true },
      { title: 'Azure Cosmos DB',                  file: 'cosmos-db.html',                done: true },
      { title: 'Azure Database for MySQL',         file: 'azure-mysql.html',              done: true },
      { title: 'Azure Database for PostgreSQL',    file: 'azure-postgresql.html',         done: true },
      { title: 'Azure Cache for Redis',            file: 'azure-redis.html',              done: true },
      { title: 'Azure Synapse Analytics',          file: 'synapse.html',                  done: true },
      { title: 'Azure Data Factory',               file: 'data-factory.html',             done: true },
      { title: 'Database Migration Service',       file: 'database-migration.html',       done: true },
      { title: 'Database Pricing',                 file: 'database-pricing.html',         done: true },
    ]
  },
  {
    id: 'azure-app-service',
    label: '🌍 Azure App Service',
    exam: 'AZ-204',
    topics: [
      { title: 'What is Azure App Service?',       file: 'app-service-overview.html',     done: true },
      { title: 'App Service Plans & Pricing',      file: 'app-service-plans.html',        done: true },
      { title: 'Create & Deploy a Web App',        file: 'create-web-app.html',           done: true },
      { title: 'Deployment Methods',               file: 'deployment-methods.html',       done: true },
      { title: 'Deployment Slots',                 file: 'deployment-slots.html',         done: true },
      { title: 'Auto-scaling',                     file: 'autoscaling.html',              done: true },
      { title: 'Custom Domains & SSL',             file: 'custom-domains-ssl.html',       done: true },
      { title: 'App Service Monitoring',           file: 'app-service-monitoring.html',   done: true },
      { title: 'App Service Best Practices',       file: 'app-service-best-practices.html', done: true },
    ]
  },
  {
    id: 'azure-functions',
    label: '⚡ Azure Functions',
    exam: 'AZ-204',
    topics: [
      { title: 'What is Azure Functions?',         file: 'functions-overview.html',       done: true },
      { title: 'HTTP Trigger — Build an API',      file: 'http-trigger.html',             done: true },
      { title: 'Timer Trigger — Scheduled Jobs',   file: 'timer-trigger.html',            done: true },
      { title: 'Blob Storage Trigger',             file: 'blob-trigger.html',             done: true },
      { title: 'Queue Trigger',                    file: 'queue-trigger.html',            done: true },
      { title: 'Functions Hosting Plans',          file: 'hosting-plans.html',            done: true },
      { title: 'Durable Functions',                file: 'durable-functions.html',        done: true },
      { title: 'Cold Starts Explained',            file: 'cold-starts.html',              done: true },
      { title: 'Functions Pricing',                file: 'functions-pricing.html',        done: true },
    ]
  },
  {
    id: 'azure-containers',
    label: '🐳 Azure Containers',
    exam: 'AZ-204',
    topics: [
      { title: 'What are Containers?',             file: 'containers-overview.html',      done: false },
      { title: 'Docker on Azure',                  file: 'docker-azure.html',             done: false },
      { title: 'Azure Container Registry',         file: 'container-registry.html',       done: false },
      { title: 'Azure Container Instances',        file: 'container-instances.html',      done: false },
      { title: 'Azure Kubernetes Service',         file: 'aks.html',                      done: false },
      { title: 'Create an AKS Cluster',            file: 'create-aks.html',               done: false },
      { title: 'Deploy App to AKS',                file: 'deploy-aks.html',               done: false },
      { title: 'AKS Scaling',                      file: 'aks-scaling.html',              done: false },
      { title: 'Azure Container Apps',             file: 'container-apps.html',           done: false },
      { title: 'ACI vs AKS vs Container Apps',     file: 'aci-vs-aks.html',               done: false },
    ]
  },
  {
    id: 'azure-identity-security',
    label: '🔐 Identity & Security',
    exam: 'AZ-500',
    topics: [
      { title: 'Microsoft Entra ID (Azure AD)',    file: 'entra-id.html',                 done: false },
      { title: 'Users & Groups',                   file: 'users-groups.html',             done: false },
      { title: 'Multi-Factor Authentication',      file: 'mfa.html',                      done: false },
      { title: 'Conditional Access',               file: 'conditional-access.html',       done: false },
      { title: 'Azure RBAC',                       file: 'rbac.html',                     done: false },
      { title: 'Azure Key Vault',                  file: 'key-vault.html',                done: false },
      { title: 'Microsoft Defender for Cloud',     file: 'defender-for-cloud.html',       done: false },
      { title: 'Just-in-time VM Access',           file: 'jit-access.html',               done: false },
      { title: 'Azure Sentinel (SIEM)',            file: 'sentinel.html',                 done: false },
      { title: 'Zero Trust Model',                 file: 'zero-trust.html',               done: false },
    ]
  },
  {
    id: 'azure-monitoring',
    label: '📊 Monitoring & Governance',
    exam: 'AZ-104',
    topics: [
      { title: 'Azure Monitor Overview',           file: 'azure-monitor.html',            done: false },
      { title: 'Metrics vs Logs',                  file: 'metrics-vs-logs.html',          done: false },
      { title: 'Log Analytics & KQL',              file: 'log-analytics.html',            done: false },
      { title: 'Alerts & Action Groups',           file: 'alerts.html',                   done: false },
      { title: 'Application Insights',             file: 'application-insights.html',     done: false },
      { title: 'Azure Advisor',                    file: 'azure-advisor.html',            done: false },
      { title: 'Azure Cost Management',            file: 'cost-management.html',          done: false },
      { title: 'Azure Policy',                     file: 'azure-policy.html',             done: false },
      { title: 'Azure Tags & Governance',          file: 'tags-governance.html',          done: false },
    ]
  },
  {
    id: 'azure-devops',
    label: '🚀 Azure DevOps & CI/CD',
    exam: 'AZ-400',
    topics: [
      { title: 'Azure DevOps Overview',            file: 'devops-overview.html',          done: false },
      { title: 'Azure Boards',                     file: 'azure-boards.html',             done: false },
      { title: 'Azure Repos & Git',                file: 'azure-repos.html',              done: false },
      { title: 'Azure Pipelines',                  file: 'azure-pipelines.html',          done: false },
      { title: 'CI/CD Pipeline Guide',             file: 'cicd-guide.html',               done: false },
      { title: 'GitHub Actions with Azure',        file: 'github-actions-azure.html',     done: false },
      { title: 'Infrastructure as Code',           file: 'iac.html',                      done: false },
      { title: 'Azure Bicep',                      file: 'bicep.html',                    done: false },
      { title: 'Terraform on Azure',               file: 'terraform-azure.html',          done: false },
      { title: 'Azure Static Web Apps',            file: 'static-web-apps.html',          done: false },
    ]
  },
  {
    id: 'azure-ai-ml',
    label: '🤖 Azure AI & ML',
    exam: 'AI-900',
    topics: [
      { title: 'Azure AI Services Overview',       file: 'ai-overview.html',              done: false },
      { title: 'Azure OpenAI Service',             file: 'azure-openai.html',             done: false },
      { title: 'Azure Cognitive Services',         file: 'cognitive-services.html',       done: false },
      { title: 'Azure Computer Vision',            file: 'computer-vision.html',          done: false },
      { title: 'Azure Speech Services',            file: 'speech-services.html',          done: false },
      { title: 'Azure Language Service',           file: 'language-service.html',         done: false },
      { title: 'Azure Bot Service',                file: 'bot-service.html',              done: false },
      { title: 'Azure Machine Learning',           file: 'azure-ml.html',                 done: false },
      { title: 'Azure AI Search',                  file: 'ai-search.html',                done: false },
    ]
  },
  {
    id: 'azure-architecture',
    label: '🏗️ Azure Architecture',
    exam: 'AZ-305',
    topics: [
      { title: 'Well-Architected Framework',       file: 'well-architected.html',         done: false },
      { title: 'High Availability & DR',           file: 'high-availability.html',        done: false },
      { title: 'Azure Backup',                     file: 'azure-backup.html',             done: false },
      { title: 'Azure Site Recovery',              file: 'site-recovery.html',            done: false },
      { title: 'Multi-region Architecture',        file: 'multi-region.html',             done: false },
      { title: 'Azure Landing Zones',              file: 'landing-zones.html',            done: false },
      { title: 'Hub-Spoke Network Design',         file: 'hub-spoke.html',                done: false },
      { title: 'Cloud Design Patterns',            file: 'design-patterns.html',          done: false },
    ]
  },
  {
    id: 'aws',
    label: '🟠 Amazon Web Services',
    exam: null,
    soon: true,
    topics: [
      { title: 'AWS Fundamentals',                 file: 'fundamentals.html',             done: false },
      { title: 'EC2 Instances',                    file: 'ec2.html',                      done: false },
      { title: 'S3 Storage',                       file: 's3.html',                       done: false },
      { title: 'Lambda Functions',                 file: 'lambda.html',                   done: false },
      { title: 'VPC Networking',                   file: 'vpc.html',                      done: false },
      { title: 'IAM — Identity & Access',          file: 'iam.html',                      done: false },
    ]
  },
  {
    id: 'gcp',
    label: '🔵 Google Cloud Platform',
    exam: null,
    soon: true,
    topics: [
      { title: 'GCP Fundamentals',                 file: 'fundamentals.html',             done: false },
      { title: 'Compute Engine',                   file: 'compute-engine.html',           done: false },
      { title: 'Cloud Storage',                    file: 'cloud-storage.html',            done: false },
      { title: 'Cloud Run',                        file: 'cloud-run.html',                done: false },
      { title: 'GKE — Kubernetes',                 file: 'gke.html',                      done: false },
    ]
  },
  {
    id: 'devops-tools',
    label: '🛠️ DevOps Tools',
    exam: null,
    soon: true,
    topics: [
      { title: 'Docker',                           file: 'docker.html',                   done: false },
      { title: 'Kubernetes',                       file: 'kubernetes.html',               done: false },
      { title: 'Terraform',                        file: 'terraform.html',                done: false },
      { title: 'Jenkins',                          file: 'jenkins.html',                  done: false },
      { title: 'GitHub Actions',                   file: 'github-actions.html',           done: false },
      { title: 'Ansible',                          file: 'ansible.html',                  done: false },
    ]
  }
];

/* ── Helpers ──────────────────────────────────────────────── */
function getRootPath() {
  const path = window.location.pathname;
  if (path.endsWith('index.html') || path === '/' || path.endsWith('/redkitecloud/')) return '';
  if (path.endsWith('certifications.html') || path.endsWith('practice.html')) return '';
  return '../../';
}

function getCurrentPage() {
  const parts = window.location.pathname.split('/').filter(Boolean);
  let file  = parts[parts.length - 1] || '';

  // Normalise: add .html if missing, remove trailing slash
  if (file && !file.includes('.')) file = file + '.html';
  if (!file) file = 'index.html';

  const rootPages = ['certifications.html', 'practice.html', 'index.html'];
  if (rootPages.includes(file)) {
    return { module: '', file };
  }
  return {
    module: parts[parts.length - 2] || '',
    file
  };
}

/* ── Toggle module open/closed ────────────────────────────── */
function rkcToggleModule(el) {
  const moduleId  = el.dataset.module;
  const topicsEl  = document.getElementById('sb-topics-' + moduleId);
  if (!topicsEl) return;

  const isOpen = !topicsEl.classList.contains('collapsed');
  topicsEl.classList.toggle('collapsed', isOpen);
  el.classList.toggle('open', !isOpen);
  el.classList.toggle('active-module', !isOpen);
}

/* ── Render sidebar ───────────────────────────────────────── */
function renderSidebar() {
  const sidebar = document.getElementById('rkc-sidebar');
  if (!sidebar) return;

  const root   = getRootPath();
  const { module: curMod, file: curFile } = getCurrentPage();

  let html = `
    <div class="sb-topics" id="sb-topics-navigate">
      <div class="sb-module" style="cursor:default;pointer-events:none">Navigate</div>
      <a class="sb-item ${curMod === '' && curFile !== 'certifications.html' && curFile !== 'practice.html' ? 'active' : ''}" href="${root}index.html"><span class="dot"></span>Home</a>
      <a class="sb-item ${curFile === 'certifications.html' ? 'active' : ''}" href="${root}certifications.html"><span class="dot"></span>Certifications</a>
      <a class="sb-item ${curFile === 'practice.html' ? 'active' : ''}" href="${root}practice.html"><span class="dot"></span>Practice Questions</a>
    </div>
  `;

  RKC_MODULES.forEach(mod => {
    const isCurrentMod = mod.id === curMod;

    // Module header
    html += `<div class="sb-divider"></div>`;
    html += `
      <div class="sb-module ${isCurrentMod ? 'open active-module' : ''}" data-module="${mod.id}" onclick="rkcToggleModule(this)">
        <span>${mod.label}</span>
        ${mod.exam
          ? `<span style="font-size:9px;background:var(--bg-raised);color:var(--text-4);padding:1px 6px;border-radius:8px;font-weight:600">${mod.exam}</span>`
          : mod.soon
            ? `<span style="font-size:9px;background:var(--bg-raised);color:var(--text-4);padding:1px 6px;border-radius:8px">Soon</span>`
            : ''
        }
        <span class="arrow">▶</span>
      </div>
    `;

    // Topic list
    html += `<div class="sb-topics ${isCurrentMod ? '' : 'collapsed'}" id="sb-topics-${mod.id}">`;

    mod.topics.forEach(topic => {
      const isActive = topic.file === curFile;
      const href     = `${root}docs/${mod.id}/${topic.file}`;
      html += `
        <a class="sb-item ${isActive ? 'active' : ''}" href="${href}">
          <span class="dot"></span>${topic.title}
        </a>`;
    });

    html += `</div>`;
  });

  sidebar.innerHTML = html;
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  renderSidebar();

  // Scroll the sidebar panel itself so the active item is visible.
  // Uses scrollTop on the sidebar element — does NOT affect the main page scroll.
  requestAnimationFrame(function() {
    const sidebar   = document.getElementById('rkc-sidebar');
    const activeItem = sidebar && sidebar.querySelector('.sb-item.active');
    if (sidebar && activeItem) {
      const sidebarTop    = sidebar.getBoundingClientRect().top;
      const itemTop       = activeItem.getBoundingClientRect().top;
      const itemOffset    = itemTop - sidebarTop;          // item position relative to sidebar
      const centerOffset  = sidebar.clientHeight / 2;      // half the visible sidebar height
      sidebar.scrollTop  += itemOffset - centerOffset;     // scroll sidebar panel, not the page
    }
  });
});
